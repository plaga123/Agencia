USE [dbagencia]
GO
/****** Object:  Table [dbo].[detviajes]    Script Date: 14/09/2019 05:18:31 p.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[detviajes](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[codigo] [int] NULL,
	[cedula] [int] NULL,
	[fecha_reg] [date] NULL,
 CONSTRAINT [PK_detviajes] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[viajeros]    Script Date: 14/09/2019 05:18:34 p.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[viajeros](
	[cedula] [int] NOT NULL,
	[nombre] [varchar](60) NULL,
	[direccion] [varchar](255) NULL,
	[telefono] [varchar](60) NULL,
 CONSTRAINT [PK_viajeros] PRIMARY KEY CLUSTERED 
(
	[cedula] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[viajes]    Script Date: 14/09/2019 05:18:34 p.m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[viajes](
	[codigo] [int] IDENTITY(1,1) NOT NULL,
	[numero] [int] NOT NULL,
	[destino] [varchar](50) NOT NULL,
	[origen] [varchar](50) NOT NULL,
	[precio] [decimal](18, 2) NOT NULL,
 CONSTRAINT [PK_viajes] PRIMARY KEY CLUSTERED 
(
	[codigo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
SET IDENTITY_INSERT [dbo].[detviajes] ON 

INSERT [dbo].[detviajes] ([id], [codigo], [cedula], [fecha_reg]) VALUES (4, 1, 16876272, CAST(N'2019-09-14' AS Date))
INSERT [dbo].[detviajes] ([id], [codigo], [cedula], [fecha_reg]) VALUES (6, 2, 16876272, CAST(N'2019-09-14' AS Date))
SET IDENTITY_INSERT [dbo].[detviajes] OFF
INSERT [dbo].[viajeros] ([cedula], [nombre], [direccion], [telefono]) VALUES (16876272, N'Jesus Hernandez', N'Las Rosas - Guatire - Sector Mirador', N'0412-9897152')
SET IDENTITY_INSERT [dbo].[viajes] ON 

INSERT [dbo].[viajes] ([codigo], [numero], [destino], [origen], [precio]) VALUES (1, 2, N'Miami', N'Venezuela', CAST(350.00 AS Decimal(18, 2)))
SET IDENTITY_INSERT [dbo].[viajes] OFF
