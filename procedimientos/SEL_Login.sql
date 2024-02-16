USE [tramita-db]
GO

/****** Object:  StoredProcedure [dbo].[SEL_Login]    Script Date: 15-02-2024 23:56:28 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO


Create Procedure [dbo].[SEL_Login]
@RutUsuario varchar(20),
@ClaveUsuario varchar(50) 
AS
BEGIN
	Select UsuarioID, NombreUsuario, EMailUsuario
	from dbo.usuarios
	Where RutUsuario=@RutUsuario
	and ClaveUsuario=@ClaveUsuario
	and VigenteUsuario=1
END
GO


