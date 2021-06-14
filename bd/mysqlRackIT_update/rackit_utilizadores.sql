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
-- Table structure for table `utilizadores`
--

DROP TABLE IF EXISTS `utilizadores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `utilizadores` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(512) NOT NULL,
  `email` varchar(512) NOT NULL,
  `password` varchar(512) NOT NULL,
  `isPremium` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `utilizadores`
--

LOCK TABLES `utilizadores` WRITE;
/*!40000 ALTER TABLE `utilizadores` DISABLE KEYS */;
INSERT INTO `utilizadores` VALUES (1,'Diogo Pereira','dmcpereira23@gmail.com','1234',1),(2,'Leandro Barroso','leandrobarroso@gmail.com','123',1),(3,'Pedro','pedro@gmail.com','123',0),(4,'João','joao@gmail.com','123',0),(5,'Rodrigo','rodrigo@gmail.com','123',0),(6,'Ana','ana@gmail.com','123',0),(7,'Joaquim','joaquim@gmail.com','123',0),(8,'Daniel','daniel@gmail.com','123',0),(9,'Daniela','daniela@gmail.com','123',0),(10,'Sofia','sofia@gmail.com','123',0),(11,'Simão','simao@gmail.com','123',0),(12,'Rui','rui@gmail.com','123',0),(13,'Alberto','alberto@gmail.com','123',0),(14,'Marco','marco@gmail.com','123',1),(15,'Juliana','juliana@gmail.com','123',1),(16,'Beatriz','beatriz@gmail.com','123',1),(17,'Cristiano','cristiano@gmail.com','123',0),(18,'Ronaldo','ronaldo@gmail.com','123',0),(19,'Moutinho','moutinho@gmail.com','123',0),(20,'Felix','felix@gmail.com','123',0),(21,'Marcio','marcio@gmail.com','123',0),(22,'Marcia','marcia@gmail.com','123',0),(23,'Tino','tino@gmail.com','123',0),(24,'Gustavo','gustavo@gmail.com','123',0),(25,'Maria','maria@gmail.com','123',0),(26,'Mariana','mariana@gmail.com','123',0),(27,'Tatiana','Tatiana@gmail.com','123',0),(28,'Joel','joel@gmail.com','123',0),(29,'Ricardo','ricardo@gmail.com','123',0),(30,'Fabio','fabio@gmail.com','123',0),(31,'Daniel Dias','danieldias@gmail.com','123',1);
/*!40000 ALTER TABLE `utilizadores` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-14 10:41:26
