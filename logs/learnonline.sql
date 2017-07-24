/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : learnonline

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-07-25 00:01:37
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for tb_admin
-- ----------------------------
DROP TABLE IF EXISTS `tb_admin`;
CREATE TABLE `tb_admin` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tb_admin
-- ----------------------------

-- ----------------------------
-- Table structure for tb_category
-- ----------------------------
DROP TABLE IF EXISTS `tb_category`;
CREATE TABLE `tb_category` (
  `category_id` int(10) NOT NULL AUTO_INCREMENT,
  `category_pid` int(10) DEFAULT NULL,
  `category_name` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tb_category
-- ----------------------------
INSERT INTO `tb_category` VALUES ('1', '-1', '前端开发');
INSERT INTO `tb_category` VALUES ('2', '-1', '后端开发');
INSERT INTO `tb_category` VALUES ('3', '1', 'HTML');
INSERT INTO `tb_category` VALUES ('4', '1', 'CSS');
INSERT INTO `tb_category` VALUES ('5', '1', 'JS');
INSERT INTO `tb_category` VALUES ('6', '2', 'JAVA');
INSERT INTO `tb_category` VALUES ('7', '2', 'C++');
INSERT INTO `tb_category` VALUES ('8', '3', '案例');
INSERT INTO `tb_category` VALUES ('9', '3', '基础');

-- ----------------------------
-- Table structure for tb_chapter
-- ----------------------------
DROP TABLE IF EXISTS `tb_chapter`;
CREATE TABLE `tb_chapter` (
  `chapter_id` int(10) NOT NULL AUTO_INCREMENT COMMENT '章节ID',
  `course_id` int(10) DEFAULT NULL,
  `chapter_name` varchar(30) DEFAULT NULL,
  `chapter_duration` int(11) DEFAULT NULL COMMENT '章节时长 单位 s',
  PRIMARY KEY (`chapter_id`),
  KEY `courseID` (`course_id`),
  CONSTRAINT `tb_chapter_ibfk_1` FOREIGN KEY (`course_id`) REFERENCES `tb_course` (`course_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tb_chapter
-- ----------------------------
INSERT INTO `tb_chapter` VALUES ('17', '2', '第1章  Chapter1', null);
INSERT INTO `tb_chapter` VALUES ('26', '3', '第六章  Chapter5', null);
INSERT INTO `tb_chapter` VALUES ('27', '1', '第六章  Chapter5', null);
INSERT INTO `tb_chapter` VALUES ('29', '1', '第七章  Chapter5', null);
INSERT INTO `tb_chapter` VALUES ('30', '1', '第五章  Chapter6', null);

-- ----------------------------
-- Table structure for tb_comment
-- ----------------------------
DROP TABLE IF EXISTS `tb_comment`;
CREATE TABLE `tb_comment` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `pid` int(10) DEFAULT NULL COMMENT '父ID',
  `reviewer_id` int(10) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `zan` int(4) DEFAULT NULL,
  `section_id` int(10) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ReviewerId` (`reviewer_id`),
  KEY `courseId` (`section_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tb_comment
-- ----------------------------
INSERT INTO `tb_comment` VALUES ('1', '-1', '1', '2017-07-04 22:45:37', '3', '1', '1');
INSERT INTO `tb_comment` VALUES ('2', '-1', '1', '2017-07-22 11:21:40', '3', '1', '提交4444');
INSERT INTO `tb_comment` VALUES ('3', '-1', '1', '2017-07-23 12:01:48', '0', '1', '');
INSERT INTO `tb_comment` VALUES ('4', '-1', '1', '2017-07-23 16:37:38', '4', '1', '提交11111');
INSERT INTO `tb_comment` VALUES ('5', '-1', '1', '2017-07-23 16:37:50', '0', '1', '提交啊啊啊啊啊啊');
INSERT INTO `tb_comment` VALUES ('6', '-1', '1', '2017-07-23 16:38:49', '5', '1', '111111111111');
INSERT INTO `tb_comment` VALUES ('7', '-1', '1', '2017-07-23 17:08:25', '0', '1', 'ffffff');
INSERT INTO `tb_comment` VALUES ('8', '-1', '1', '2017-07-23 17:08:37', '0', '1', 'ffffff');
INSERT INTO `tb_comment` VALUES ('9', '-1', '1', '2017-07-23 17:08:58', '0', '1', '');
INSERT INTO `tb_comment` VALUES ('10', '-1', '1', '2017-07-23 17:09:51', '6', '1', 'xxxxxxxxx');
INSERT INTO `tb_comment` VALUES ('11', '-1', '1', '2017-07-23 17:10:09', '0', '1', '44654');
INSERT INTO `tb_comment` VALUES ('12', '-1', '1', '2017-07-23 17:22:27', '7', '1', 'ffffffdddddd');
INSERT INTO `tb_comment` VALUES ('13', '-1', '1', '2017-07-23 17:22:31', '0', '1', 'ffffffdddddd');
INSERT INTO `tb_comment` VALUES ('14', '-1', '1', '2017-07-23 17:22:32', '0', '1', 'ffffffdddddd');
INSERT INTO `tb_comment` VALUES ('15', '-1', '1', '2017-07-23 17:22:32', '0', '1', 'ffffffdddddd');
INSERT INTO `tb_comment` VALUES ('16', '-1', '1', '2017-07-23 17:22:33', '9', '1', 'ffffffdddddd');
INSERT INTO `tb_comment` VALUES ('17', '-1', '1', '2017-07-23 17:22:33', '0', '1', 'ffffffdddddd');
INSERT INTO `tb_comment` VALUES ('18', '-1', '1', '2017-07-23 17:24:44', '0', '1', 'eeeeeeeeeee');
INSERT INTO `tb_comment` VALUES ('19', '-1', '1', '2017-07-23 17:28:24', '0', '1', 'qqqqqqqqqqq');
INSERT INTO `tb_comment` VALUES ('20', '-1', '1', '2017-07-23 18:25:52', '0', '1', '315463');

-- ----------------------------
-- Table structure for tb_course
-- ----------------------------
DROP TABLE IF EXISTS `tb_course`;
CREATE TABLE `tb_course` (
  `course_id` int(10) NOT NULL AUTO_INCREMENT,
  `course_name` varchar(30) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL COMMENT '课程简介',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `duration` int(11) DEFAULT NULL COMMENT '课程体系时间长度 单位 秒',
  `difficulty` varchar(10) DEFAULT NULL,
  `course_cover_url` varchar(200) DEFAULT NULL,
  `teacher_id` int(10) DEFAULT NULL,
  `hits` int(10) DEFAULT NULL,
  `score_number` int(10) DEFAULT NULL,
  `total_score` int(10) DEFAULT NULL,
  `category_id` int(10) DEFAULT NULL,
  PRIMARY KEY (`course_id`),
  KEY `teacherID` (`teacher_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tb_course
-- ----------------------------
INSERT INTO `tb_course` VALUES ('1', 'Python入门', '内存v个吧veovbbfdvblkcnljknv', '2017-07-11 21:19:10', '123', '初级', null, '1', null, null, null, '1');
INSERT INTO `tb_course` VALUES ('2', 'name', null, null, null, '初级', '/upload/1500714230157.jpg', '1', null, null, null, '1');
INSERT INTO `tb_course` VALUES ('3', '32123', null, null, null, '初级', '/upload/1500714458034.jpg', '1', null, null, null, '1');

-- ----------------------------
-- Table structure for tb_department
-- ----------------------------
DROP TABLE IF EXISTS `tb_department`;
CREATE TABLE `tb_department` (
  `depart_id` int(10) NOT NULL AUTO_INCREMENT,
  `depart_name` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`depart_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of tb_department
-- ----------------------------

-- ----------------------------
-- Table structure for tb_ppt
-- ----------------------------
DROP TABLE IF EXISTS `tb_ppt`;
CREATE TABLE `tb_ppt` (
  `ppt_id` int(10) NOT NULL AUTO_INCREMENT,
  `section_id` int(10) DEFAULT NULL,
  `url` varchar(200) DEFAULT NULL,
  `index` int(5) DEFAULT NULL,
  PRIMARY KEY (`ppt_id`),
  KEY `SectionId` (`section_id`),
  CONSTRAINT `tb_ppt_ibfk_1` FOREIGN KEY (`section_id`) REFERENCES `tb_section` (`section_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tb_ppt
-- ----------------------------

-- ----------------------------
-- Table structure for tb_quesans
-- ----------------------------
DROP TABLE IF EXISTS `tb_quesans`;
CREATE TABLE `tb_quesans` (
  `ques_ans_id` int(10) NOT NULL AUTO_INCREMENT COMMENT '父id 如果为负数 则是问题 正数为回答',
  `pid` int(10) DEFAULT NULL,
  `section_id` int(10) DEFAULT NULL,
  `reviewer_id` int(10) DEFAULT NULL,
  `zan` int(4) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `content` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`ques_ans_id`),
  KEY `pid` (`pid`),
  KEY `courseId` (`section_id`),
  KEY `ReviewerId` (`reviewer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of tb_quesans
-- ----------------------------
INSERT INTO `tb_quesans` VALUES ('1', '-1', '1', '1', '2', '2017-07-04 11:42:38', '问题1');
INSERT INTO `tb_quesans` VALUES ('2', '-1', '1', '1', '2', '2017-07-13 11:42:42', '问题2');
INSERT INTO `tb_quesans` VALUES ('3', '1', '1', '1', '2', '2017-07-01 11:42:46', '回复问题1');
INSERT INTO `tb_quesans` VALUES ('4', '1', '1', '1', '2', '2017-07-29 11:42:49', '回复问题2');

-- ----------------------------
-- Table structure for tb_section
-- ----------------------------
DROP TABLE IF EXISTS `tb_section`;
CREATE TABLE `tb_section` (
  `section_id` int(10) NOT NULL AUTO_INCREMENT,
  `chapter_id` int(10) DEFAULT NULL,
  `section_name` varchar(30) DEFAULT NULL,
  `section_duration` int(11) DEFAULT NULL COMMENT '小节时间长度单位s',
  PRIMARY KEY (`section_id`),
  KEY `ChapterId` (`chapter_id`),
  CONSTRAINT `tb_section_ibfk_1` FOREIGN KEY (`chapter_id`) REFERENCES `tb_chapter` (`chapter_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tb_section
-- ----------------------------
INSERT INTO `tb_section` VALUES ('39', '26', '个梵蒂冈', null);
INSERT INTO `tb_section` VALUES ('40', '26', '第一节', null);
INSERT INTO `tb_section` VALUES ('41', '27', '第一节', null);
INSERT INTO `tb_section` VALUES ('42', '27', '第二节', null);
INSERT INTO `tb_section` VALUES ('43', '29', '个梵蒂冈', null);
INSERT INTO `tb_section` VALUES ('44', '29', 'Section1', null);
INSERT INTO `tb_section` VALUES ('45', '30', '123123', null);

-- ----------------------------
-- Table structure for tb_stu
-- ----------------------------
DROP TABLE IF EXISTS `tb_stu`;
CREATE TABLE `tb_stu` (
  `stu_id` int(10) NOT NULL AUTO_INCREMENT,
  `stu_name` varchar(20) DEFAULT NULL,
  `stu_pwd` varchar(20) DEFAULT NULL,
  `stu_icon_url` varchar(200) DEFAULT NULL,
  `department_id` int(10) DEFAULT NULL,
  PRIMARY KEY (`stu_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tb_stu
-- ----------------------------
INSERT INTO `tb_stu` VALUES ('1', 'name1', '333', '333', null);
INSERT INTO `tb_stu` VALUES ('2', 'nam2', 'sss', null, null);
INSERT INTO `tb_stu` VALUES ('4', 'name4', '66', null, null);
INSERT INTO `tb_stu` VALUES ('5', '555', null, null, null);
INSERT INTO `tb_stu` VALUES ('8', '88', null, null, null);
INSERT INTO `tb_stu` VALUES ('9', '99', null, null, null);
INSERT INTO `tb_stu` VALUES ('10', '10', null, null, null);
INSERT INTO `tb_stu` VALUES ('11', '11', null, null, null);
INSERT INTO `tb_stu` VALUES ('12', '12', null, null, null);
INSERT INTO `tb_stu` VALUES ('13', '13', null, null, null);
INSERT INTO `tb_stu` VALUES ('14', '14', null, null, null);

-- ----------------------------
-- Table structure for tb_teacher
-- ----------------------------
DROP TABLE IF EXISTS `tb_teacher`;
CREATE TABLE `tb_teacher` (
  `teacher_id` int(10) NOT NULL AUTO_INCREMENT,
  `teacher_name` varchar(30) NOT NULL,
  `teacher_brief` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`teacher_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of tb_teacher
-- ----------------------------
INSERT INTO `tb_teacher` VALUES ('1', 'teachername1', null);
INSERT INTO `tb_teacher` VALUES ('2', 'teachaername2', null);
INSERT INTO `tb_teacher` VALUES ('3', 'teachername3', null);

-- ----------------------------
-- Table structure for tb_video
-- ----------------------------
DROP TABLE IF EXISTS `tb_video`;
CREATE TABLE `tb_video` (
  `video_id` int(10) NOT NULL AUTO_INCREMENT,
  `section_id` int(10) DEFAULT NULL,
  `video_name` varchar(20) DEFAULT NULL,
  `url` varchar(200) DEFAULT NULL,
  `durition` int(11) DEFAULT NULL COMMENT '章节时长 单位s',
  PRIMARY KEY (`video_id`),
  KEY `SectionID` (`section_id`),
  CONSTRAINT `tb_video_ibfk_1` FOREIGN KEY (`section_id`) REFERENCES `tb_section` (`section_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tb_video
-- ----------------------------
INSERT INTO `tb_video` VALUES ('7', '40', null, '/upload/course/40/1500815546378.docx', null);
INSERT INTO `tb_video` VALUES ('8', '43', '1-2 NumPy数据存取与函数.mp4', '/upload/section/43/1500907334463.mp4', null);
INSERT INTO `tb_video` VALUES ('9', '42', '3-1 课程导学2.mp4', '/upload/section/42/1500910211488.mp4', null);
