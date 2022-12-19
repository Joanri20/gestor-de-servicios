
    import prisma from 'config/prisma';

    const TipoOrdenServicioResolvers = {
    TipoOrdenServicio: {
        ordenServicios: async (parent:any, _:any) => {
                  return await prisma.ordenServicio.findMany({
                  where: {
                      tipoOrdenServicio: {
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
        tipoOrdenServicios: async () => {
        return await prisma.tipoOrdenServicio.findMany({});
        },
        tipoOrdenServicio: async (_:any, args:any) => {
        return await prisma.tipoOrdenServicio.findUnique({
            where: {
            id: args.id,
            },
        });
        },
    },
    Mutation:{
      createTipoOrdenServicio:async (_:any, args:any)=>{
        return await prisma.tipoOrdenServicio.create({
          data:{...args.data,  }
        })
      },
      updateTipoOrdenServicio:async (_:any, args:any)=>{
        return await prisma.tipoOrdenServicio.update({
          where:{
            id:args.where.id
          },
          data:{...args.data, }
        })
      },
      deleteTipoOrdenServicio:async (_:any, args:any)=>{
        return await prisma.tipoOrdenServicio.delete({
          where:{
            id:args.where.id
          }
        })
      },
    }
    };

    export { TipoOrdenServicioResolvers };

    