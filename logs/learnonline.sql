/*
Navicat MySQL Data Transfer

Source Server         : root
Source Server Version : 50709
Source Host           : localhost:3306
Source Database       : learnonline

Target Server Type    : MYSQL
Target Server Version : 50709
File Encoding         : 65001

Date: 2017-07-20 17:46:06
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for tb_admin
-- ----------------------------
DROP TABLE IF EXISTS `tb_admin`;
CREATE TABLE `tb_admin` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createtime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tb_admin
-- ----------------------------
INSERT INTO `tb_admin` VALUES ('1', 'admin', 'admin', '2017-07-08 19:19:03');

-- ----------------------------
-- Table structure for tb_category
-- ----------------------------
DROP TABLE IF EXISTS `tb_category`;
CREATE TABLE `tb_category` (
  `categoryId` int(11) NOT NULL,
  `categoryName` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`categoryId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tb_category
-- ----------------------------

-- ----------------------------
-- Table structure for tb_category_course
-- ----------------------------
DROP TABLE IF EXISTS `tb_category_course`;
CREATE TABLE `tb_category_course` (
  `categoryId` int(11) NOT NULL,
  `courseId` int(11) NOT NULL,
  PRIMARY KEY (`categoryId`,`courseId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tb_category_course
-- ----------------------------

-- ----------------------------
-- Table structure for tb_chapter
-- ----------------------------
DROP TABLE IF EXISTS `tb_chapter`;
CREATE TABLE `tb_chapter` (
  `chapterId` int(11) NOT NULL COMMENT '章节ID',
  `courseID` int(5) NOT NULL,
  `chapterName` varchar(255) DEFAULT NULL,
  `chapterDuration` int(11) DEFAULT NULL COMMENT '章节时长 单位 s',
  PRIMARY KEY (`chapterId`),
  KEY `courseID` (`courseID`),
  CONSTRAINT `tb_chapter_ibfk_1` FOREIGN KEY (`courseID`) REFERENCES `tb_course` (`courseID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tb_chapter
-- ----------------------------
INSERT INTO `tb_chapter` VALUES ('1', '1', '第一章', '180');
INSERT INTO `tb_chapter` VALUES ('2', '1', '第二章', '80');

-- ----------------------------
-- Table structure for tb_comment
-- ----------------------------
DROP TABLE IF EXISTS `tb_comment`;
CREATE TABLE `tb_comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pid` int(11) DEFAULT NULL COMMENT '父ID',
  `ReviewerId` int(11) DEFAULT NULL,
  `createtime` datetime DEFAULT NULL,
  `zan` int(11) DEFAULT NULL,
  `index` int(11) DEFAULT NULL COMMENT '几楼',
  `courseId` int(11) NOT NULL,
  `content` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `ReviewerId` (`ReviewerId`),
  KEY `courseId` (`courseId`),
  CONSTRAINT `tb_comment_ibfk_1` FOREIGN KEY (`ReviewerId`) REFERENCES `tb_stu` (`stuId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `tb_comment_ibfk_2` FOREIGN KEY (`courseId`) REFERENCES `tb_course` (`courseID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tb_comment
-- ----------------------------
INSERT INTO `tb_comment` VALUES ('1', '1', '1', '2017-07-15 11:06:55', '500', null, '1', 'yxl1 say content1');
INSERT INTO `tb_comment` VALUES ('2', '1', '1', '2017-07-09 11:07:02', '6', null, '1', 'yxl1 say content2');
INSERT INTO `tb_comment` VALUES ('3', '-1', '1', '2017-07-20 16:08:23', null, null, '1', '提交');
INSERT INTO `tb_comment` VALUES ('4', '-1', '1', '2017-07-20 16:09:25', null, null, '1', '提交');
INSERT INTO `tb_comment` VALUES ('5', '-1', '1', '2017-07-20 16:09:47', null, null, '1', '提交');
INSERT INTO `tb_comment` VALUES ('6', '-1', '1', '2017-07-20 16:10:26', null, null, '1', '提交啦啦啦啦啦');
INSERT INTO `tb_comment` VALUES ('7', '-1', '1', '2017-07-20 16:20:52', null, null, '1', '提交hhhh');
INSERT INTO `tb_comment` VALUES ('8', '-1', '1', '2017-07-20 16:27:53', '0', null, '1', '提交ssss');
INSERT INTO `tb_comment` VALUES ('9', '-1', '1', '2017-07-20 16:28:05', '0', null, '1', '提交aaaaa');

-- ----------------------------
-- Table structure for tb_course
-- ----------------------------
DROP TABLE IF EXISTS `tb_course`;
CREATE TABLE `tb_course` (
  `courseID` int(5) NOT NULL,
  `courseName` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL COMMENT '课程简介',
  `createtime` datetime DEFAULT NULL COMMENT '创建时间',
  `duration` int(11) DEFAULT NULL COMMENT '课程体系时间长度 单位 秒',
  PRIMARY KEY (`courseID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tb_course
-- ----------------------------
INSERT INTO `tb_course` VALUES ('1', 'name', 'name', '2017-06-28 23:11:14', '123');
INSERT INTO `tb_course` VALUES ('2', '语文', '写作', null, null);

-- ----------------------------
-- Table structure for tb_ppt
-- ----------------------------
DROP TABLE IF EXISTS `tb_ppt`;
CREATE TABLE `tb_ppt` (
  `PPTId` int(11) NOT NULL,
  `SectionId` int(11) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `index` int(5) DEFAULT NULL,
  PRIMARY KEY (`PPTId`),
  KEY `SectionId` (`SectionId`),
  CONSTRAINT `tb_ppt_ibfk_1` FOREIGN KEY (`SectionId`) REFERENCES `tb_section` (`SectionId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tb_ppt
-- ----------------------------

-- ----------------------------
-- Table structure for tb_quesans
-- ----------------------------
DROP TABLE IF EXISTS `tb_quesans`;
CREATE TABLE `tb_quesans` (
  `QuesAnsId` int(11) NOT NULL COMMENT '父id 如果为负数 则是问题 正数为回答',
  `pid` int(11) DEFAULT NULL,
  `courseId` int(11) DEFAULT NULL,
  `ReviewerId` int(11) DEFAULT NULL,
  `zan` int(5) DEFAULT NULL,
  `createTime` datetime DEFAULT NULL,
  `content` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`QuesAnsId`),
  KEY `pid` (`pid`),
  KEY `courseId` (`courseId`),
  KEY `ReviewerId` (`ReviewerId`),
  CONSTRAINT `tb_quesans_ibfk_1` FOREIGN KEY (`pid`) REFERENCES `tb_quesans` (`QuesAnsId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `tb_quesans_ibfk_2` FOREIGN KEY (`courseId`) REFERENCES `tb_course` (`courseID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `tb_quesans_ibfk_3` FOREIGN KEY (`ReviewerId`) REFERENCES `tb_stu` (`stuId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of tb_quesans
-- ----------------------------

-- ----------------------------
-- Table structure for tb_section
-- ----------------------------
DROP TABLE IF EXISTS `tb_section`;
CREATE TABLE `tb_section` (
  `SectionId` int(11) NOT NULL,
  `ChapterId` int(11) DEFAULT NULL,
  `SectionName` varchar(255) DEFAULT NULL,
  `SectionDuration` int(11) DEFAULT NULL COMMENT '小节时间长度单位s',
  PRIMARY KEY (`SectionId`),
  KEY `ChapterId` (`ChapterId`),
  CONSTRAINT `tb_section_ibfk_1` FOREIGN KEY (`ChapterId`) REFERENCES `tb_chapter` (`chapterId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tb_section
-- ----------------------------
INSERT INTO `tb_section` VALUES ('1', '1', '第一节', null);
INSERT INTO `tb_section` VALUES ('2', '1', '第二节', null);
INSERT INTO `tb_section` VALUES ('3', '1', '第三节', null);
INSERT INTO `tb_section` VALUES ('4', '1', '第四节', null);

-- ----------------------------
-- Table structure for tb_stu
-- ----------------------------
DROP TABLE IF EXISTS `tb_stu`;
CREATE TABLE `tb_stu` (
  `stuId` int(11) NOT NULL AUTO_INCREMENT,
  `StuName` varchar(255) DEFAULT NULL,
  `StuPwd` varchar(255) DEFAULT NULL,
  `StuIconUrl` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`stuId`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tb_stu
-- ----------------------------
INSERT INTO `tb_stu` VALUES ('1', 'yxl1', '9999999999', '/img/Player/user.jpg');

-- ----------------------------
-- Table structure for tb_video
-- ----------------------------
DROP TABLE IF EXISTS `tb_video`;
CREATE TABLE `tb_video` (
  `videoID` int(11) NOT NULL,
  `SectionID` int(11) DEFAULT NULL,
  `index` int(5) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `durition` int(11) DEFAULT NULL COMMENT '章节时长 单位s',
  PRIMARY KEY (`videoID`),
  KEY `SectionID` (`SectionID`),
  CONSTRAINT `tb_video_ibfk_1` FOREIGN KEY (`SectionID`) REFERENCES `tb_section` (`SectionId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tb_video
-- ----------------------------
