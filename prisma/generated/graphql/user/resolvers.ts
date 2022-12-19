
    import prisma from 'config/prisma';
    import { Resolver } from 'types';

    const UserResolvers:Resolver = {
    User: {
        roles: async (parent) => {
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
                direccionNomenclatura: async (parent) => {
                return await prisma.nomenclatura.findUnique({
                    where: {
                    id: parent.nomenclaturaId,
                    },
                });
                }
                ,servicios: async (parent) => {
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
                },ordenServicioCreadas: async (parent) => {
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
                },ordenServicioEjecutadas: async (parent) => {
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
                },Cliente: async (parent) => {
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
        user: async (args) => {
        return await prisma.user.findUnique({
            where: {
            id: args.id,
            },
        });
        },
    },
    Mutation:{
      createUser:async (args)=>{
        return await prisma.user.create({
          data:{...args.data,  }
        })
      },
      updateUser:async (args)=>{
        return await prisma.user.update({
          where:{
            id:args.where.id
          },
          data:{...args.data, }
        })
      },
      deleteUser:async (args)=>{
        return await prisma.user.delete({
          where:{
            id:args.where.id
          }
        })
      },
    }
    };

    export { UserResolvers };

    