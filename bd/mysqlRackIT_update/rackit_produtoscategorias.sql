-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: rackit
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `produtoscategorias`
--

DROP TABLE IF EXISTS `produtoscategorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produtoscategorias` (
  `id` int NOT NULL AUTO_INCREMENT,
  `produtosId` int DEFAULT NULL,
  `categoriasId` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produtoscategorias`
--

LOCK TABLES `produtoscategorias` WRITE;
/*!40000 ALTER TABLE `produtoscategorias` DISABLE KEYS */;
INSERT INTO `produtoscategorias` VALUES (1,1,1),(2,1,2),(3,2,3),(4,3,3),(5,2,5),(6,4,22),(7,5,1),(8,5,8),(9,6,1),(10,6,10),(11,7,11),(12,8,12),(13,8,12),(14,9,22),(15,10,22),(16,11,16),(17,11,1),(18,12,1),(19,13,21),(20,14,21),(21,15,21),(22,16,22),(23,17,1),(24,18,1),(25,18,30),(26,19,26),(27,20,27),(28,20,5),(29,21,29),(30,21,30),(31,21,29),(32,22,22),(33,23,22),(34,24,1),(35,24,39),(36,25,1),(37,25,1),(38,25,2),(39,26,39),(40,26,1),(41,27,1),(42,28,21),(43,29,1),(44,30,44),(45,30,45),(46,31,5),(47,31,5),(48,25,2);
/*!40000 ALTER TABLE `produtoscategorias` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-14 10:41:27
