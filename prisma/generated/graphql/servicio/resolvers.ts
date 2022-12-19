
    import prisma from 'config/prisma';

    const ServicioResolvers = {
    Servicio: {
        
                cliente: async (parent:any, _:any) => {
                return await prisma.cliente.findUnique({
                    where: {
                    id: parent.clienteId,
                    },
                });
                }
                ,
                plan: async (parent:any, _:any) => {
                return await prisma.plan.findUnique({
                    where: {
                    id: parent.planId,
                    },
                });
                }
                ,
                direccionNomenclatura: async (parent:any, _:any) => {
                return await prisma.nomenclatura.findUnique({
                    where: {
                    id: parent.nomenclaturaId,
                    },
                });
                }
                ,
                user: async (parent:any, _:any) => {
                return await prisma.user.findUnique({
                    where: {
                    id: parent.userId,
                    },
                });
                }
                ,ordenServicios: async (parent:any, _:any) => {
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
        servicio: async (_:any, args:any) => {
        return await prisma.servicio.findUnique({
            where: {
            id: args.id,
            },
        });
        },
    },
    Mutation:{
      createServicio:async (_:any, args:any)=>{
        return await prisma.servicio.create({
          data:{...args.data,  }
        })
      },
      updateServicio:async (_:any, args:any)=>{
        return await prisma.servicio.update({
          where:{
            id:args.where.id
          },
          data:{...args.data, }
        })
      },
      deleteServicio:async (_:any, args:any)=>{
        return await prisma.servicio.delete({
          where:{
            id:args.where.id
          }
        })
      },
    }
    };

    export { ServicioResolvers };

    