USE [tramita-db]
GO

/****** Object:  StoredProcedure [dbo].[SEL_MenuUsuario]    Script Date: 15-02-2024 23:52:20 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO


CREATE Procedure [dbo].[SEL_MenuUsuario] 
@UsuarioID numeric,
@PerfilID numeric
AS
BEGIN
	Select Menu.MenuID, Menu, URL, PadreID
	from dbo.Menu
	join dbo.MenuPerfil on MenuPerfil.MenuID = Menu.MenuID
	join dbo.Usuarios on Usuarios.PerfilID = MenuPerfil.PerfilID	
	Where Usuarios.UsuarioID=@UsuarioID
	and Usuarios.PerfilID=@PerfilID
	and Usuarios.VigenteUsuario=1
	order by Menu.Orden
END
GO


