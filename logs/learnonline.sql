/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : learnonline

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-07-27 23:00:13
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
-- Table structure for tb_answer_ques
-- ----------------------------
DROP TABLE IF EXISTS `tb_answer_ques`;
CREATE TABLE `tb_answer_ques` (
  `answer_ques_id` int(10) NOT NULL,
  `ques_id` int(10) DEFAULT NULL,
  `stu_ans` varchar(200) CHARACTER SET utf8 DEFAULT NULL,
  `score` int(5) DEFAULT NULL,
  PRIMARY KEY (`answer_ques_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for tb_category_first
-- ----------------------------
DROP TABLE IF EXISTS `tb_category_first`;
CREATE TABLE `tb_category_first` (
  `category_first_id` int(10) NOT NULL,
  `category_name` varchar(20) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`category_first_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for tb_category_second
-- ----------------------------
DROP TABLE IF EXISTS `tb_category_second`;
CREATE TABLE `tb_category_second` (
  `category_second_id` int(10) NOT NULL,
  `category_second_pid` int(10) DEFAULT NULL,
  `category_second_name` varchar(20) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`category_second_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for tb_category_third
-- ----------------------------
DROP TABLE IF EXISTS `tb_category_third`;
CREATE TABLE `tb_category_third` (
  `category_thrid_id` int(10) NOT NULL,
  `category_third_pid` int(10) DEFAULT NULL,
  `category_third_name` varchar(20) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`category_thrid_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8;

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
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8;

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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

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
-- Table structure for tb_first_konw
-- ----------------------------
DROP TABLE IF EXISTS `tb_first_konw`;
CREATE TABLE `tb_first_konw` (
  `first_konw_id` int(10) NOT NULL,
  `category_third_id` int(10) DEFAULT NULL,
  `first_konw_name` varchar(20) CHARACTER SET utf8 DEFAULT NULL,
  `first_konw_desc` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`first_konw_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for tb_paper
-- ----------------------------
DROP TABLE IF EXISTS `tb_paper`;
CREATE TABLE `tb_paper` (
  `paper_id` int(10) NOT NULL COMMENT '试卷编码',
  `paper_name` varchar(20) CHARACTER SET utf8 DEFAULT NULL,
  `paper_total_score` int(3) DEFAULT NULL,
  `paper_time_min` int(3) DEFAULT NULL,
  `paper_category_id` int(10) DEFAULT NULL,
  `paper_diff` varchar(10) CHARACTER SET utf8 DEFAULT NULL,
  `paper_sigle_num` int(2) DEFAULT NULL,
  `paper_mult_num` int(2) DEFAULT NULL,
  `paper_brief_num` int(2) DEFAULT NULL,
  PRIMARY KEY (`paper_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for tb_papper_ques_mapping
-- ----------------------------
DROP TABLE IF EXISTS `tb_papper_ques_mapping`;
CREATE TABLE `tb_papper_ques_mapping` (
  `papper_id` int(10) NOT NULL,
  `ques_id` int(10) NOT NULL,
  PRIMARY KEY (`papper_id`,`ques_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for tb_plan
-- ----------------------------
DROP TABLE IF EXISTS `tb_plan`;
CREATE TABLE `tb_plan` (
  `plan_id` int(10) NOT NULL,
  `stu_id` int(10) DEFAULT NULL,
  `course_id` int(10) DEFAULT NULL,
  `start_time` date DEFAULT NULL,
  `end_time` date DEFAULT NULL,
  `course_duration` int(10) DEFAULT NULL,
  `current_duration` int(10) DEFAULT NULL,
  PRIMARY KEY (`plan_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
-- Table structure for tb_ques
-- ----------------------------
DROP TABLE IF EXISTS `tb_ques`;
CREATE TABLE `tb_ques` (
  `ques_id` int(10) NOT NULL,
  `ques_detail` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `ques_type` varchar(10) CHARACTER SET utf8 DEFAULT NULL,
  `ques_diff` varchar(10) CHARACTER SET utf8 DEFAULT NULL,
  `ques_score` int(2) DEFAULT NULL,
  `option_A` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `option_B` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `option_C` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `option_D` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `ques_ans` varchar(200) CHARACTER SET utf8 DEFAULT NULL,
  `ques_parse` varchar(300) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`ques_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8;

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
-- Table structure for tb_stu_faver_course
-- ----------------------------
DROP TABLE IF EXISTS `tb_stu_faver_course`;
CREATE TABLE `tb_stu_faver_course` (
  `stu_id` int(10) NOT NULL,
  `course_id` int(10) NOT NULL,
  PRIMARY KEY (`stu_id`,`course_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for tb_stu_learn_record
-- ----------------------------
DROP TABLE IF EXISTS `tb_stu_learn_record`;
CREATE TABLE `tb_stu_learn_record` (
  `stu_learn_record_id` int(10) NOT NULL AUTO_INCREMENT,
  `stu_id` int(10) DEFAULT NULL,
  `section_id` int(10) DEFAULT NULL,
  `current__time` int(10) DEFAULT NULL COMMENT '当前节视频播放的时间',
  `start_time` datetime DEFAULT NULL,
  `end_time` datetime DEFAULT NULL,
  `learn_time_length` int(10) DEFAULT NULL,
  `duration` int(20) DEFAULT NULL,
  PRIMARY KEY (`stu_learn_record_id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for tb_teacher
-- ----------------------------
DROP TABLE IF EXISTS `tb_teacher`;
CREATE TABLE `tb_teacher` (
  `teacher_id` int(10) NOT NULL AUTO_INCREMENT,
  `teacher_name` varchar(30) CHARACTER SET utf8 NOT NULL,
  `teacher_brief` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`teacher_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

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
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
