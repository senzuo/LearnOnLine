/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : learnonline

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-07-19 13:47:29
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
  `chapterName` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `chapterDuration` int(11) DEFAULT NULL COMMENT '章节时长 单位 s',
  PRIMARY KEY (`chapterId`),
  KEY `courseID` (`courseID`),
  CONSTRAINT `tb_chapter_ibfk_1` FOREIGN KEY (`courseID`) REFERENCES `tb_course` (`courseID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tb_chapter
-- ----------------------------
INSERT INTO `tb_chapter` VALUES ('1', '1', '第一章', '180');

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
  `courseId` int(11) DEFAULT NULL,
  `content` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ReviewerId` (`ReviewerId`),
  KEY `courseId` (`courseId`),
  CONSTRAINT `tb_comment_ibfk_1` FOREIGN KEY (`ReviewerId`) REFERENCES `tb_stu` (`stuId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `tb_comment_ibfk_2` FOREIGN KEY (`courseId`) REFERENCES `tb_course` (`courseID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tb_comment
-- ----------------------------

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
-- Table structure for tb_section
-- ----------------------------
DROP TABLE IF EXISTS `tb_section`;
CREATE TABLE `tb_section` (
  `SectionId` int(11) NOT NULL,
  `ChapterId` int(11) DEFAULT NULL,
  `SectionName` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `SectionDuration` int(11) DEFAULT NULL COMMENT '小节时间长度单位s',
  PRIMARY KEY (`SectionId`),
  KEY `ChapterId` (`ChapterId`),
  CONSTRAINT `tb_section_ibfk_1` FOREIGN KEY (`ChapterId`) REFERENCES `tb_chapter` (`chapterId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tb_section
-- ----------------------------
INSERT INTO `tb_section` VALUES ('1', '1', '第一节', null);

-- ----------------------------
-- Table structure for tb_stu
-- ----------------------------
DROP TABLE IF EXISTS `tb_stu`;
CREATE TABLE `tb_stu` (
  `stuId` int(11) NOT NULL AUTO_INCREMENT,
  `StuName` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `StuPwd` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`stuId`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tb_stu
-- ----------------------------
INSERT INTO `tb_stu` VALUES ('9', '9', '9999999999');
INSERT INTO `tb_stu` VALUES ('12', '2', '299299');

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
