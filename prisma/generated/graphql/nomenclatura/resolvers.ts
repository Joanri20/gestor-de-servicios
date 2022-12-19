import prisma from "config/prisma";
import { Resolver } from 'types';

    const NomenclaturaResolvers:Resolver = {
    Nomenclatura: {
        users: async (parent) => {
                  return await prisma.user.findMany({
                  where: {
                      direccionNomenclatura: {
                        is: {
                          id: {
                            equals: parent.id,
                          },
                        },
                      },
                    },
                  })
                },servicio: async (parent) => {
                  return await prisma.servicio.findMany({
                  where: {
                      direccionNomenclatura: {
                        is: {
                          id: {
                            equals: parent.id,
                          },
                        },
                      },
                    },
                  })
                },ordenServicioDestino: async (parent) => {
                  return await prisma.ordenServicio.findMany({
                  where: {
                      direccionNomenclaturaDestino: {
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
        nomenclaturas: async () => {
        return await prisma.nomenclatura.findMany({});
        },
        nomenclatura: async (args) => {
        return await prisma.nomenclatura.findUnique({
            where: {
              id: args.id,              
            },
        });
        },
    },
    Mutation:{
      createNomenclatura:async (args)=>{
        return await prisma.nomenclatura.create({
          data:{...args.data,  }
        })
      },
      updateNomenclatura:async (args)=>{
        return await prisma.nomenclatura.update({
          where:{
            id:args.where.id
          },
          data:{...args.data, }
        })
      },
      deleteNomenclatura:async (args)=>{
        return await prisma.nomenclatura.delete({
          where:{
            id:args.where.id
          }
        })
      },
    }
    };

    export { NomenclaturaResolvers };

    