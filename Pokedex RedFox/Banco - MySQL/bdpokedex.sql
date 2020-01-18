-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 18-Jan-2020 às 22:25
-- Versão do servidor: 10.1.37-MariaDB
-- versão do PHP: 7.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bdpokedex`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbpokemon`
--

CREATE TABLE `tbpokemon` (
  `codPokemon` int(11) NOT NULL,
  `nomePokemon` varchar(100) DEFAULT NULL,
  `forcaPokemon` int(11) DEFAULT NULL,
  `velPokemon` int(11) DEFAULT NULL,
  `tipoPokemon` varchar(200) DEFAULT NULL,
  `habilidadePokemon` varchar(200) DEFAULT NULL,
  `fotoPokemon` varchar(1000) DEFAULT NULL,
  `dataCadastro` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `tbpokemon`
--

INSERT INTO `tbpokemon` (`codPokemon`, `nomePokemon`, `forcaPokemon`, `velPokemon`, `tipoPokemon`, `habilidadePokemon`, `fotoPokemon`, `dataCadastro`) VALUES
(64, 'Charmander', 80, 65, 'Dragao', 'Fly', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png', '2020-01-18 00:00:00'),
(66, 'casdASDas', 80, 65, 'asdasd', 'asd', 'https://i.ya-webdesign.com/images/pokeball-pixel-png-2.png', '2020-01-18 00:00:00'),
(67, 'dasd', 123, 123, 'adas', 'asdasd', 'https://i.ya-webdesign.com/images/pokeball-pixel-png-2.png', '2020-01-18 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbpokemon`
--
ALTER TABLE `tbpokemon`
  ADD PRIMARY KEY (`codPokemon`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbpokemon`
--
ALTER TABLE `tbpokemon`
  MODIFY `codPokemon` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
