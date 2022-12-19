
    import prisma from 'config/prisma';
    import { Resolver } from 'types';

    const ServicioResolvers:Resolver = {
    Servicio: {
        
                cliente: async (parent) => {
                return await prisma.cliente.findUnique({
                    where: {
                    id: parent.clienteId,
                    },
                });
                }
                ,
                plan: async (parent) => {
                return await prisma.plan.findUnique({
                    where: {
                    id: parent.planId,
                    },
                });
                }
                ,
                direccionNomenclatura: async (parent) => {
                return await prisma.nomenclatura.findUnique({
                    where: {
                    id: parent.nomenclaturaId,
                    },
                });
                }
                ,
                user: async (parent) => {
                return await prisma.user.findUnique({
                    where: {
                    id: parent.userId,
                    },
                });
                }
                ,ordenServicios: async (parent) => {
                  return await prisma.ordenServicio.findMany({
                  where: {
                      servicio: {
                        is: {
                          id: {
                            equals: parent.id,
                          },
                        },
                      },
                    },
                  })
                }
    },
    Query: {
        servicios: async () => {
        return await prisma.servicio.findMany({});
        },
        servicio: async (args) => {
        return await prisma.servicio.findUnique({
            where: {
            id: args.id,
            },
        });
        },
    },
    Mutation:{
      createServicio:async (args)=>{
        return await prisma.servicio.create({
          data:{...args.data,  }
        })
      },
      updateServicio:async (args)=>{
        return await prisma.servicio.update({
          where:{
            id:args.where.id
          },
          data:{...args.data, }
        })
      },
      deleteServicio:async (args)=>{
        return await prisma.servicio.delete({
          where:{
            id:args.where.id
          }
        })
      },
    }
    };

    export { ServicioResolvers };

    