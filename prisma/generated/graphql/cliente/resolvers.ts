
    import prisma from 'config/prisma';
import { Resolver } from 'types';

    const ClienteResolvers:Resolver = {
    Cliente: {
        servicios: async (parent) => {
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
                user: async (parent) => {
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
        cliente: async (args) => {
        return await prisma.cliente.findUnique({
            where: {
            id: args.id,
            },
        });
        },
    },
    Mutation:{
      createCliente:async (args)=>{
        return await prisma.cliente.create({
          data:{...args.data, fechaExpedicion: new Date(args.data.fechaExpedicion).toISOString() }
        })
      },
      updateCliente:async (args)=>{
        return await prisma.cliente.update({
          where:{
            id:args.where.id
          },
          data:{...args.data, ...(args.data.fechaExpedicion && {fechaExpedicion: new Date(args.data.fechaExpedicion).toISOString()})}
        })
      },
      deleteCliente:async (args)=>{
        return await prisma.cliente.delete({
          where:{
            id:args.where.id
          }
        })
      },
    }
    };

    export { ClienteResolvers };

    