
    import prisma from 'config/prisma';

    const OrdenServicioResolvers = {
    OrdenServicio: {
        
                servicio: async (parent:any, _:any) => {
                return await prisma.servicio.findUnique({
                    where: {
                    id: parent.servicioId,
                    },
                });
                }
                ,
                tipoOrdenServicio: async (parent:any, _:any) => {
                return await prisma.tipoOrdenServicio.findUnique({
                    where: {
                    id: parent.tipoOrdenServicioId,
                    },
                });
                }
                ,
                usuarioCreo: async (parent:any, _:any) => {
                return await prisma.user.findUnique({
                    where: {
                    id: parent.userIdCreo,
                    },
                });
                }
                ,
                usuarioEjecuto: async (parent:any, _:any) => {
                return await prisma.user.findUnique({
                    where: {
                    id: parent.userIdEjecuto,
                    },
                });
                }
                ,
                direccionNomenclaturaDestino: async (parent:any, _:any) => {
                  if (parent.nomenclaturaIdDestino) {
                    return await prisma.nomenclatura.findUnique({
                        where: {
                        id: parent.nomenclaturaIdDestino,
                        },
                    });
                  }
                  else{
                    return null;
                  }
                }
                
    },
    Query: {
        ordenServicios: async () => {
        return await prisma.ordenServicio.findMany({});
        },
        ordenServicio: async (_:any, args:any) => {
        return await prisma.ordenServicio.findUnique({
            where: {
            id: args.id,
            },
        });
        },
    },
    Mutation:{
      createOrdenServicio:async (_:any, args:any)=>{
        return await prisma.ordenServicio.create({
          data:{...args.data, fechaCierreOrden: new Date(args.data.fechaCierreOrden).toISOString() }
        })
      },
      updateOrdenServicio:async (_:any, args:any)=>{
        return await prisma.ordenServicio.update({
          where:{
            id:args.where.id
          },
          data:{...args.data, ...(args.data.fechaCierreOrden && {fechaCierreOrden: new Date(args.data.fechaCierreOrden).toISOString()})}
        })
      },
      deleteOrdenServicio:async (_:any, args:any)=>{
        return await prisma.ordenServicio.delete({
          where:{
            id:args.where.id
          }
        })
      },
    }
    };

    export { OrdenServicioResolvers };

    