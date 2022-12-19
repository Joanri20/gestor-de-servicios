
    import prisma from 'config/prisma';

    const ClienteResolvers = {
    Cliente: {
        servicios: async (parent:any, _:any) => {
                  return await prisma.servicio.findMany({
                  where: {
                      cliente: {
                        is: {
                          id: {
                            equals: parent.id,
                          },
                        },
                      },
                    },
                  })
                },
                user: async (parent:any, _:any) => {
                return await prisma.user.findUnique({
                    where: {
                    id: parent.userId,
                    },
                });
                }
                
    },
    Query: {
        clientes: async () => {
        return await prisma.cliente.findMany({});
        },
        cliente: async (_:any, args:any) => {
        return await prisma.cliente.findUnique({
            where: {
            id: args.id,
            },
        });
        },
    },
    Mutation:{
      createCliente:async (_:any, args:any)=>{
        return await prisma.cliente.create({
          data:{...args.data, fechaExpedicion: new Date(args.data.fechaExpedicion).toISOString() }
        })
      },
      updateCliente:async (_:any, args:any)=>{
        return await prisma.cliente.update({
          where:{
            id:args.where.id
          },
          data:{...args.data, ...(args.data.fechaExpedicion && {fechaExpedicion: new Date(args.data.fechaExpedicion).toISOString()})}
        })
      },
      deleteCliente:async (_:any, args:any)=>{
        return await prisma.cliente.delete({
          where:{
            id:args.where.id
          }
        })
      },
    }
    };

    export { ClienteResolvers };

    