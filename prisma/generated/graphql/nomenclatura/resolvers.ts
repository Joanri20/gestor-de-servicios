import { equal } from "assert";
import prisma from "config/prisma";

    const NomenclaturaResolvers = {
    Nomenclatura: {
        users: async (parent:any, _:any) => {
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
                },servicio: async (parent:any, _:any) => {
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
                },ordenServicioDestino: async (parent:any, _:any) => {
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
        nomenclatura: async (_:any, args:any) => {
        return await prisma.nomenclatura.findUnique({
            where: {
              id: args.id,              
            },
        });
        },
    },
    Mutation:{
      createNomenclatura:async (_:any, args:any)=>{
        return await prisma.nomenclatura.create({
          data:{...args.data,  }
        })
      },
      updateNomenclatura:async (_:any, args:any)=>{
        return await prisma.nomenclatura.update({
          where:{
            id:args.where.id
          },
          data:{...args.data, }
        })
      },
      deleteNomenclatura:async (_:any, args:any)=>{
        return await prisma.nomenclatura.delete({
          where:{
            id:args.where.id
          }
        })
      },
    }
    };

    export { NomenclaturaResolvers };

    