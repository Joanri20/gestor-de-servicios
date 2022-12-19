
    import prisma from 'config/prisma';
    import { Resolver } from 'types';

    const OrdenServicioResolvers:Resolver = {
    OrdenServicio: {
        
                servicio: async (parent) => {
                return await prisma.servicio.findUnique({
                    where: {
                    id: parent.servicioId,
                    },
                });
                }
                ,
                tipoOrdenServicio: async (parent) => {
                return await prisma.tipoOrdenServicio.findUnique({
                    where: {
                    id: parent.tipoOrdenServicioId,
                    },
                });
                }
                ,
                usuarioCreo: async (parent) => {
                return await prisma.user.findUnique({
                    where: {
                    id: parent.userIdCreo,
                    },
                });
                }
                ,
                usuarioEjecuto: async (parent) => {
                return await prisma.user.findUnique({
                    where: {
                    id: parent.userIdEjecuto,
                    },
                });
                }
                ,
                direccionNomenclaturaDestino: async (parent) => {
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
        ordenServicio: async (args) => {
        return await prisma.ordenServicio.findUnique({
            where: {
            id: args.id,
            },
        });
        },
    },
    Mutation:{
      createOrdenServicio:async (args)=>{
        return await prisma.ordenServicio.create({
          data:{...args.data, fechaCierreOrden: new Date(args.data.fechaCierreOrden).toISOString() }
        })
      },
      updateOrdenServicio:async (args)=>{
        return await prisma.ordenServicio.update({
          where:{
            id:args.where.id
          },
          data:{...args.data, ...(args.data.fechaCierreOrden && {fechaCierreOrden: new Date(args.data.fechaCierreOrden).toISOString()})}
        })
      },
      deleteOrdenServicio:async (args)=>{
        return await prisma.ordenServicio.delete({
          where:{
            id:args.where.id
          }
        })
      },
    }
    };

    export { OrdenServicioResolvers };

    