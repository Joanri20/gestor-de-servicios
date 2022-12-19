
    import prisma from 'config/prisma';
    import { Resolver } from 'types';

    const TipoOrdenServicioResolvers:Resolver = {
    TipoOrdenServicio: {
        ordenServicios: async (parent) => {
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
        tipoOrdenServicio: async (args) => {
        return await prisma.tipoOrdenServicio.findUnique({
            where: {
            id: args.id,
            },
        });
        },
    },
    Mutation:{
      createTipoOrdenServicio:async (args)=>{
        return await prisma.tipoOrdenServicio.create({
          data:{...args.data,  }
        })
      },
      updateTipoOrdenServicio:async (args)=>{
        return await prisma.tipoOrdenServicio.update({
          where:{
            id:args.where.id
          },
          data:{...args.data, }
        })
      },
      deleteTipoOrdenServicio:async (args)=>{
        return await prisma.tipoOrdenServicio.delete({
          where:{
            id:args.where.id
          }
        })
      },
    }
    };

    export { TipoOrdenServicioResolvers };

    