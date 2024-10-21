-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-10-2024 a las 04:21:29
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `roblox`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `friends`
--

CREATE TABLE `friends` (
  `Id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `image` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `friends`
--

INSERT INTO `friends` (`Id`, `name`, `image`) VALUES
(1, 'puk_karevzz', 'src/pages/mainPage/img/avatar/avatar1.jpg'),
(2, 'Rip_sasos', 'src/pages/mainPage/img/avatar/avatar2.jpg'),
(3, 'xlivxw', 'src/pages/mainPage/img/avatar/avatar3.jpg'),
(4, 'JuanJox', 'src/pages/mainPage/img/avatar/avatar4.jpg'),
(5, 'Stornado11', 'src/pages/mainPage/img/avatar/avatar5.jpg'),
(6, 'Gabo', 'src/pages/mainPage/img/avatar/avatar6.jpg'),
(7, 'rook_Jucky', 'src/pages/mainPage/img/avatar/avatar7.jpg'),
(8, 'Thekingboss797', 'src/pages/mainPage/img/avatar/avatar8.jpg'),
(9, 'PanBimbo', 'src/pages/mainPage/img/avatar/avatar9.jpg'),
(10, 'SukunaFemboy', 'src/pages/mainPage/img/avatar/avatar10.jpg'),
(11, 'DaddyGojo', 'src/pages/mainPage/img/avatar/avatar11.jpg'),
(12, 'WinstonRegaleNota', 'src/pages/mainPage/img/avatar/avatar12.jpg'),
(13, 'MiTulita', 'src/pages/mainPage/img/avatar/avatar12.jpg'),
(14, 'Manuela', 'src/pages/mainPage/img/avatar/avatar12.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recommend-for-you`
--

CREATE TABLE `recommend-for-you` (
  `Id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `rating` int(3) NOT NULL,
  `image` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `recommend-for-you`
--

INSERT INTO `recommend-for-you` (`Id`, `name`, `rating`, `image`) VALUES
(1, 'BloxBurg', 90, 'src/pages/mainPage/img/games/bloxburg.jpg'),
(2, 'Piggy', 70, 'src/pages/mainPage/img/games/piggy.jpg'),
(3, 'Jailbreak', 98, 'src/pages/mainPage/img/games/jailbreak.jpg'),
(4, 'Evade', 92, 'src/pages/mainPage/img/games/evade.jpg'),
(5, 'Doors', 90, 'src/pages/mainPage/img/games/doors.jpg'),
(6, 'Adopt Me', 88, 'src/pages/mainPage/img/games/adopt-me.jpg'),
(7, 'Brookhaven', 78, 'src/pages/mainPage/img/games/brookhaven.jpg'),
(8, 'Meepcity', 68, 'src/pages/mainPage/img/games/meepcity.jpg'),
(9, 'Murder Mystery', 96, 'src/pages/mainPage/img/games/murder-mystery.jpg'),
(10, 'Natural Disaster', 38, 'src/pages/mainPage/img/games/natural-disaster.jpg'),
(11, 'Tower of Hell', 38, 'src/pages/mainPage/img/games/tower-hell.jpg'),
(12, 'Work at a Pizza Place', 58, 'src/pages/mainPage/img/games/delivery-pizza.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `Id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `image` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`Id`, `name`, `image`) VALUES
(1, 'SV_HPPY', 'src/img/avatar-principal.jpg\r\n');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `friends`
--
ALTER TABLE `friends`
  ADD PRIMARY KEY (`Id`);

--
-- Indices de la tabla `recommend-for-you`
--
ALTER TABLE `recommend-for-you`
  ADD PRIMARY KEY (`Id`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`Id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
