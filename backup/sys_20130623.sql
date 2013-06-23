/*
SQLyog Ultimate v8.71 
MySQL - 5.6.12 : Database - test
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
/*Table structure for table `sys_dept_info` */

DROP TABLE IF EXISTS `sys_dept_info`;

CREATE TABLE `sys_dept_info` (
  `id` int(36) NOT NULL AUTO_INCREMENT,
  `num` varchar(18) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `manager` varchar(36) DEFAULT NULL,
  `opt` varchar(225) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `sys_dept_info` */

/*Table structure for table `sys_resource_info` */

DROP TABLE IF EXISTS `sys_resource_info`;

CREATE TABLE `sys_resource_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `url` varchar(225) DEFAULT NULL,
  `parent` varchar(11) DEFAULT NULL,
  `leaf` char(1) DEFAULT NULL COMMENT '0 is leaf,1 has leaf',
  `opt` varchar(225) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `sys_resource_info` */

/*Table structure for table `sys_role_info` */

DROP TABLE IF EXISTS `sys_role_info`;

CREATE TABLE `sys_role_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `sys_role_info` */

/*Table structure for table `sys_role_resource_info` */

DROP TABLE IF EXISTS `sys_role_resource_info`;

CREATE TABLE `sys_role_resource_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role` varchar(36) DEFAULT NULL,
  `resource` varchar(36) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `sys_role_resource_info` */

/*Table structure for table `sys_user_info` */

DROP TABLE IF EXISTS `sys_user_info`;

CREATE TABLE `sys_user_info` (
  `id` int(36) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(65) DEFAULT NULL,
  `login_name` varchar(65) DEFAULT NULL,
  `login_pass` varchar(45) DEFAULT NULL,
  `birth` varchar(45) DEFAULT NULL,
  `image` varchar(225) DEFAULT NULL,
  `sex` char(1) DEFAULT NULL,
  `dept` varchar(36) DEFAULT NULL,
  `opt` varchar(225) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

/*Data for the table `sys_user_info` */

insert  into `sys_user_info`(`id`,`user_name`,`login_name`,`login_pass`,`birth`,`image`,`sex`,`dept`,`opt`) values (1,'Administrator','admin','su','1987-11-25','','1','1','root');

/*Table structure for table `sys_user_role_info` */

DROP TABLE IF EXISTS `sys_user_role_info`;

CREATE TABLE `sys_user_role_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(36) DEFAULT NULL,
  `role` varchar(36) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `sys_user_role_info` */

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
