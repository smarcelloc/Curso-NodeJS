-- --------------------------------------------------------
-- Servidor:                     localhost
-- Versão do servidor:           5.7.24 - MySQL Community Server (GPL)
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Copiando estrutura do banco de dados para portal_noticias
CREATE DATABASE IF NOT EXISTS `portal_noticias` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `portal_noticias`;

-- Copiando estrutura para tabela portal_noticias.noticias
CREATE TABLE IF NOT EXISTS `noticias` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `titulo` varchar(199) NOT NULL,
  `conteudo` text NOT NULL,
  `data_postada` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- Copiando dados para a tabela portal_noticias.noticias: ~5 rows (aproximadamente)
/*!40000 ALTER TABLE `noticias` DISABLE KEYS */;
INSERT INTO `noticias` (`id`, `titulo`, `conteudo`, `data_postada`) VALUES
	(2, 'Presidente do Conselho de Ética do Senado diz que Chico Rodrigues deveria se licenciar do mandato', 'O presidente do Conselho de Ética do Senado, Jayme Campos (DEM-MT), afirmou nesta segunda-feira (19) que o senador Chico Rodrigues (DEM-RR) deveria se licenciar do mandato por 121 dias para não deixar "nenhuma dúvida" de que quer "esclarecer a verdade" sobre o dinheiro encontrado em sua cueca.', '2020-10-19 17:46:48'),
	(3, 'Butantan: vacina é segura e apresentou menos reações que outras testadas no Brasil', 'ÃO PAULO – Dimas Covas, diretor do Instituto Butantan (São Paulo), divulgou hoje os resultados preliminares sobre a segurança da CoronaVac. A vacina é desenvolvida pelo instituto, em parceira com a farmacêutica chinesa Sinovac.\r\n\r\nSegundo os dados apresentados pelo diretor, os resultados dos testes clínicos feitos em 9 mil voluntários no Brasil são semelhantes aos estudos apresentados na China, em que 94,7% dos 50 mil voluntários não tiveram efeitos adversos.', '2020-10-19 17:48:29'),
	(4, 'Eleições na Bolívia: quem é Luis Arce, ex-ministro de Evo Morales apontado por projeções como novo presidente do país', 'De acordo com o resultado preliminar, Luis Arce Catacora, que é ex-ministro da Economia, teria obtido ampla vantagem, de mais de 52% dos votos contra 31% de seu principal adversário, o ex-presidente Carlos Mesa.\r\n\r\n"Todos nós bolivianos demos passos importantes, recuperamos a democracia e a esperança", disse Arce, após ficar sabendo das primeiras projeções de resultados.', '2020-10-19 17:49:08'),
	(5, 'Começa a votação antecipada na Flórida, um dos estados mais importantes nas eleições presidenciais dos EUA', 'Começou nesta segunda-feira (19) a votação antecipada no estado da Flórida, um dos estados mais importantes para determinar o resultado das eleições presidenciais deste ano nos Estados Unidos, marcadas para 3 de novembro.\r\n\r\n', '2020-10-19 17:49:56'),
	(6, 'Need Inspiration? Here Are 5 Challenging App Ideas You Can Start Building Today', 'Like with any other skill, coding can be mastered with dedication, perseverance, and hard work. Coding is like a muscle that needs to be constantly trained.\r\n', '2020-10-19 17:52:11');
/*!40000 ALTER TABLE `noticias` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
