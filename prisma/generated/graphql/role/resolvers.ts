
    import prisma from 'config/prisma';
    import { Resolver } from 'types';

    const RoleResolvers:Resolver = {
    Role: {
        users: async (parent) => {
                  return await prisma.user.findMany({
                    where: {
                      roles: {
                        some: {
                          id: {
                            equals: parent.id,
                          },
                        },
                      },
                    },
                  });
                }
    },
    Query: {
        roles: async () => {
        return await prisma.role.findMany({});
        },
        role: async (args) => {
        return await prisma.role.findUnique({
            where: {
            id: args.id,
            },
        });
        },
    },
    Mutation:{
      createRole:async (args)=>{
        return await prisma.role.create({
          data:{...args.data,  }
        })
      },
      updateRole:async (args)=>{
        return await prisma.role.update({
          where:{
            id:args.where.id
          },
          data:{...args.data, }
        })
      },
      deleteRole:async (args)=>{
        return await prisma.role.delete({
          where:{
            id:args.where.id
          }
        })
      },
    }
    };

    export { RoleResolvers };

    