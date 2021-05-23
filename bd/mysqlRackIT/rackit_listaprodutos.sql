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
-- Table structure for table `listaprodutos`
--

DROP TABLE IF EXISTS `listaprodutos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `listaprodutos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(512) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `listaprodutos`
--

LOCK TABLES `listaprodutos` WRITE;
/*!40000 ALTER TABLE `listaprodutos` DISABLE KEYS */;
INSERT INTO `listaprodutos` VALUES (1,'Lista do Diogo Pereira'),(2,'Lista do Leandro Barroso'),(3,'Lista do Pedro'),(4,'Lista do João'),(5,'Lista do Rodrigo'),(6,'Lista da Ana'),(7,'Lista do Joaquim'),(8,'Lista do Daniel'),(9,'Lista da Daniela'),(10,'Lista da Sofia'),(11,'Lista do Simão'),(12,'Lista do Rui'),(13,'Lista do Alberto'),(14,'Lista do Marco'),(15,'Lista da Juliana'),(16,'Lista da Beatriz'),(17,'Lista do Cristiano'),(18,'Lista do Ronaldo'),(19,'Lista do Moutinho'),(20,'Lista do Felix'),(21,'Lista do Marcio'),(22,'Lista da Marcia'),(23,'Lista do Tino'),(24,'Lista do Gustavo'),(25,'Lista da Maria'),(26,'Lista da Mariana'),(27,'Lista da Juliana'),(28,'Lista do Joel'),(29,'Lista do Ricardo'),(30,'Lista do Fabio');
/*!40000 ALTER TABLE `listaprodutos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-23  1:08:22
