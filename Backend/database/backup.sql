-- MySQL dump 10.13  Distrib 8.0.33, for macos13.3 (arm64)
--
-- Host: localhost    Database: minimail
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `emails`
--
CREATE DATABASE IF NOT EXISTS minimail;
USE minimail;

DROP TABLE IF EXISTS `emails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `emails` (
  `ID_Mail` int NOT NULL AUTO_INCREMENT,
  `Subject` varchar(255) NOT NULL,
  `From_user` varchar(255) DEFAULT NULL,
  `To_user` varchar(255) DEFAULT NULL,
  `Message` varchar(1000) DEFAULT NULL,
  `ID_User` int NOT NULL,
  PRIMARY KEY (`ID_Mail`),
  KEY `ID_User` (`ID_User`),
  CONSTRAINT `emails_ibfk_1` FOREIGN KEY (`ID_User`) REFERENCES `users` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `emails`
--

LOCK TABLES `emails` WRITE;
/*!40000 ALTER TABLE `emails` DISABLE KEYS */;
INSERT INTO `emails` VALUES (1,'Comprapan','Aitor','Minavo','HolaMundo',14),(2,'Comprapan','Aitor','Minavo','HolaMundo',14),(3,'Comprapan2','Aitor','Minavo','HolaMundo',14),(4,'Comprapan3','Aitor','Minavo','HolaMundo',14),(5,'Pajaro en mano','Elton','Minavo','HolaMundo',15),(6,'Dory y Nemo','Elton','Minavo','HolaMundo',15),(7,'Dory y Nemo','Elton','Minavo','HolaMundo',14),(8,'Pajaro en mano','Elton','Minavo','HolaMundo',14),(9,'Mira el correo','leyend','Andrea','jajajajajajajaja esto no lo veras nunca',16);
/*!40000 ALTER TABLE `emails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  `Lastname` varchar(255) NOT NULL,
  `Mail` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'asdfdfsdfafgsd','fggdfdgf','gdfgdf','dgfdfg'),(2,'sadfsdsad','asddas','dfadfs','dasfadfs'),(3,'sdafdsadf','dfsafadsadfs','dfsadfsadsf','dfsafdas'),(4,'ddfsaafds','fdasfdaafd','fddfasdfasadfsadfdfas','fdasfdfsdfsa'),(5,'ddfsaafds','fdasfdaafd','fddfasdfasadfsadfdfas','fdasfdfsdfsa'),(6,'adsffdasfdsa','fadsfaadf','dffadsafd','afdasadf'),(7,'asdfaffdsa','sadfdasfdas','fasfdsa','fasas'),(8,'jajaj','ajajaj','ajajaj','ajaja'),(9,'misko','jones','example@example.com','1234'),(10,'sth','sth','example@example.com','1234'),(11,'sdfdasdfasads','fdsaafsd','dsafda','dsafaf'),(12,'sdafdsafdafs','asdfdafsadsf','adsdafs','fdsaadfs'),(13,'Aitor','Tilla','example1@gmail.com','1234'),(14,'Minavo','DeKiev','example2@hotmail.com','1234'),(15,'Elton','Tito','example4@gmail.com','1234'),(16,'Andrea','Lopez','alopa@gmail.com','2345'),(17,'Petter','Peñafiel','petteraxcell03@gmail.com','1234');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-03 11:07:01
