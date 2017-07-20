/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : learnonline

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-07-20 23:06:03
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
  `createtime` datetime DEFAULT NULL,
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
  `categoryId` int(10) NOT NULL AUTO_INCREMENT,
  `categoryName` varchar(30) DEFAULT NULL,
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
  `categoryId` int(10) NOT NULL AUTO_INCREMENT,
  `courseId` int(10) NOT NULL,
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
  `chapterId` int(10) NOT NULL AUTO_INCREMENT COMMENT '章节ID',
  `courseID` int(10) DEFAULT NULL,
  `chapterName` varchar(30) DEFAULT NULL,
  `chapterDuration` int(11) DEFAULT NULL COMMENT '章节时长 单位 s',
  PRIMARY KEY (`chapterId`),
  KEY `courseID` (`courseID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tb_chapter
-- ----------------------------
INSERT INTO `tb_chapter` VALUES ('1', '1', '第一章', '123');
INSERT INTO `tb_chapter` VALUES ('2', '1', '第二章', '123');
INSERT INTO `tb_chapter` VALUES ('3', '1', '第三章', '123');
INSERT INTO `tb_chapter` VALUES ('4', '1', '第四章', '123');

-- ----------------------------
-- Table structure for tb_comment
-- ----------------------------
DROP TABLE IF EXISTS `tb_comment`;
CREATE TABLE `tb_comment` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `pid` int(10) DEFAULT NULL COMMENT '父ID',
  `ReviewerId` int(10) DEFAULT NULL,
  `createtime` datetime DEFAULT NULL,
  `zan` int(4) DEFAULT NULL,
  `SectionId` int(10) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ReviewerId` (`ReviewerId`),
  KEY `courseId` (`SectionId`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tb_comment
-- ----------------------------
INSERT INTO `tb_comment` VALUES ('1', '-1', '1', '2017-06-29 22:46:16', '20', null, 'contentcontentcontentcontent');
INSERT INTO `tb_comment` VALUES ('11', '-1', '1', '2017-07-20 22:55:55', null, '1', '提交');
INSERT INTO `tb_comment` VALUES ('12', '-1', '1', '2017-07-20 22:56:10', null, '1', '提交评论 问答 笔记');

-- ----------------------------
-- Table structure for tb_course
-- ----------------------------
DROP TABLE IF EXISTS `tb_course`;
CREATE TABLE `tb_course` (
  `courseID` int(10) NOT NULL AUTO_INCREMENT,
  `courseName` varchar(30) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL COMMENT '课程简介',
  `createtime` datetime DEFAULT NULL COMMENT '创建时间',
  `duration` int(11) DEFAULT NULL COMMENT '课程体系时间长度 单位 秒',
  `difficulty` varchar(10) DEFAULT NULL,
  `courseCoverUrl` varchar(200) DEFAULT NULL,
  `teacherID` int(10) DEFAULT NULL,
  `hits` int(10) DEFAULT NULL,
  `scoreNumber` int(10) DEFAULT NULL,
  `totalScore` int(10) DEFAULT NULL,
  PRIMARY KEY (`courseID`),
  KEY `teacherID` (`teacherID`)
) ENGINE=InnoDB AUTO_INCREMENT=1002 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tb_course
-- ----------------------------
INSERT INTO `tb_course` VALUES ('1', 'Python入门', '内存v个吧veovbbfdvblkcnljknv', '2017-07-11 21:19:10', '123', '初级', null, '1', null, null, null);

-- ----------------------------
-- Table structure for tb_department
-- ----------------------------
DROP TABLE IF EXISTS `tb_department`;
CREATE TABLE `tb_department` (
  `departId` int(10) NOT NULL AUTO_INCREMENT,
  `departName` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`departId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of tb_department
-- ----------------------------

-- ----------------------------
-- Table structure for tb_ppt
-- ----------------------------
DROP TABLE IF EXISTS `tb_ppt`;
CREATE TABLE `tb_ppt` (
  `PPTId` int(10) NOT NULL AUTO_INCREMENT,
  `SectionId` int(10) DEFAULT NULL,
  `url` varchar(200) DEFAULT NULL,
  `index` int(5) DEFAULT NULL,
  PRIMARY KEY (`PPTId`),
  KEY `SectionId` (`SectionId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tb_ppt
-- ----------------------------

-- ----------------------------
-- Table structure for tb_quesans
-- ----------------------------
DROP TABLE IF EXISTS `tb_quesans`;
CREATE TABLE `tb_quesans` (
  `QuesAnsId` int(10) NOT NULL AUTO_INCREMENT COMMENT '父id 如果为负数 则是问题 正数为回答',
  `pid` int(10) DEFAULT NULL,
  `courseId` int(10) DEFAULT NULL,
  `ReviewerId` int(10) DEFAULT NULL,
  `zan` int(4) DEFAULT NULL,
  `createTime` datetime DEFAULT NULL,
  `content` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`QuesAnsId`),
  KEY `pid` (`pid`),
  KEY `courseId` (`courseId`),
  KEY `ReviewerId` (`ReviewerId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of tb_quesans
-- ----------------------------

-- ----------------------------
-- Table structure for tb_section
-- ----------------------------
DROP TABLE IF EXISTS `tb_section`;
CREATE TABLE `tb_section` (
  `SectionId` int(10) NOT NULL AUTO_INCREMENT,
  `ChapterId` int(10) DEFAULT NULL,
  `SectionName` varchar(30) DEFAULT NULL,
  `SectionDuration` int(11) DEFAULT NULL COMMENT '小节时间长度单位s',
  PRIMARY KEY (`SectionId`),
  KEY `ChapterId` (`ChapterId`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tb_section
-- ----------------------------
INSERT INTO `tb_section` VALUES ('1', '1', '第一节', null);
INSERT INTO `tb_section` VALUES ('2', '1', '第二节', null);
INSERT INTO `tb_section` VALUES ('3', '1', '第三节', null);
INSERT INTO `tb_section` VALUES ('4', '1', '第四节', null);
INSERT INTO `tb_section` VALUES ('5', null, null, null);

-- ----------------------------
-- Table structure for tb_stu
-- ----------------------------
DROP TABLE IF EXISTS `tb_stu`;
CREATE TABLE `tb_stu` (
  `stuId` int(10) NOT NULL AUTO_INCREMENT,
  `StuName` varchar(20) DEFAULT NULL,
  `StuPwd` varchar(20) DEFAULT NULL,
  `StuIconUrl` varchar(200) DEFAULT NULL,
  `departId` int(10) DEFAULT NULL,
  PRIMARY KEY (`stuId`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tb_stu
-- ----------------------------
INSERT INTO `tb_stu` VALUES ('1', '申卓', '123', null, '1');

-- ----------------------------
-- Table structure for tb_teacher
-- ----------------------------
DROP TABLE IF EXISTS `tb_teacher`;
CREATE TABLE `tb_teacher` (
  `teacherId` int(10) NOT NULL AUTO_INCREMENT,
  `teacherName` varchar(30) NOT NULL,
  `teacherBrief` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`teacherId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of tb_teacher
-- ----------------------------

-- ----------------------------
-- Table structure for tb_video
-- ----------------------------
DROP TABLE IF EXISTS `tb_video`;
CREATE TABLE `tb_video` (
  `videoID` int(10) NOT NULL AUTO_INCREMENT,
  `SectionID` int(10) DEFAULT NULL,
  `index` int(5) DEFAULT NULL,
  `url` varchar(200) DEFAULT NULL,
  `durition` int(11) DEFAULT NULL COMMENT '章节时长 单位s',
  PRIMARY KEY (`videoID`),
  KEY `SectionID` (`SectionID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tb_video
-- ----------------------------
