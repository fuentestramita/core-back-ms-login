USE [tramita-db]
GO

/****** Object:  StoredProcedure [dbo].[SEL_PrimeraInscripcion]    Script Date: 16-02-2024 10:00:26 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO




CREATE Procedure [dbo].[SEL_PrimeraInscripcion]
@PPU varchar(20),
@NumeroFactura varchar(20),
@RUTDocumento varchar(20)
AS
BEGIN
	SELECT TOP 1 PrimeraInscripcion.*
	  ,DocumentosRecibidos.[DocumentoID]
      ,DocumentosRecibidos.[NaturalezaAdquisicion]
      ,DocumentosRecibidos.[NroDocumentoCausa]
      ,DocumentosRecibidos.[ValorNeto]
      ,DocumentosRecibidos.[ValorIVAFactura]
      ,DocumentosRecibidos.[ValorTotalFactura]
      ,DocumentosRecibidos.[LugarDocumento]
      ,DocumentosRecibidos.[FechaDocumento]
      ,DocumentosRecibidos.[NombreAutorizanteEmisor]
      ,DocumentosRecibidos.[AcreedorBeneficiarioDemandante]
      ,DocumentosRecibidos.[PDF]
	  ,DocumentosRecibidos.[RUTDocumento]
  FROM [tramita-db].[dbo].[PrimeraInscripcion]
  JOIN DocumentosRecibidos ON DocumentosRecibidos.PrimeraInscripcionID = PrimeraInscripcion.PrimeraInscripcionID
  JOIN Vehiculos ON Vehiculos.VehiculoID = PrimeraInscripcion.VehiculoID
  where (@PPU = '' OR  Vehiculos.PPU = @PPU)
  AND (@NumeroFactura = '' OR PrimeraInscripcion.NumeroFactura = @NumeroFactura )
  AND (@RUTDocumento = '' OR DocumentosRecibidos.RUTDocumento = @RUTDocumento )
END
GO


