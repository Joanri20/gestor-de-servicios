
    import prisma from 'config/prisma';

    const UserResolvers = {
    User: {
        roles: async (parent:any, _:any) => {
                  return await prisma.role.findMany({
                    where: {
                      users: {
                        some: {
                          id: {
                            equals: parent.id,
                          },
                        },
                      },
                    },
                  });
                },
                direccionNomenclatura: async (parent:any, _:any) => {
                return await prisma.nomenclatura.findUnique({
                    where: {
                    id: parent.nomenclaturaId,
                    },
                });
                }
                ,servicios: async (parent:any, _:any) => {
                  return await prisma.servicio.findMany({
                  where: {
                      user: {
                        is: {
                          id: {
                            equals: parent.id,
                          },
                        },
                      },
                    },
                  })
                },ordenServicioCreadas: async (parent:any, _:any) => {
                  return await prisma.ordenServicio.findMany({
                  where: {
                      usuarioCreo: {
                        is: {
                          id: {
                            equals: parent.id,
                          },
                        },
                      },
                    },
                  })
                },ordenServicioEjecutadas: async (parent:any, _:any) => {
                  return await prisma.ordenServicio.findMany({
                  where: {
                      usuarioCreo: {
                        is: {
                          id: {
                            equals: parent.id,
                          },
                        },
                      },
                    },
                  })
                },Cliente: async (parent:any, _:any) => {
                  return await prisma.cliente.findMany({
                  where: {
                      user: {
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
        users: async () => {
        return await prisma.user.findMany({});
        },
        user: async (_:any, args:any) => {
        return await prisma.user.findUnique({
            where: {
            id: args.id,
            },
        });
        },
    },
    Mutation:{
      createUser:async (_:any, args:any)=>{
        return await prisma.user.create({
          data:{...args.data,  }
        })
      },
      updateUser:async (_:any, args:any)=>{
        return await prisma.user.update({
          where:{
            id:args.where.id
          },
          data:{...args.data, }
        })
      },
      deleteUser:async (_:any, args:any)=>{
        return await prisma.user.delete({
          where:{
            id:args.where.id
          }
        })
      },
    }
    };

    export { UserResolvers };

    