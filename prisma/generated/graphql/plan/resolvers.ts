
    import prisma from 'config/prisma';
    import { Resolver } from 'types';

    const PlanResolvers:Resolver = {
    Plan: {
        servicios: async (parent) => {
                  return await prisma.servicio.findMany({
                  where: {
                      plan: {
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
        plans: async () => {
        return await prisma.plan.findMany({});
        },
        plan: async (args) => {
        return await prisma.plan.findUnique({
            where: {
            id: args.id,
            },
        });
        },
    },
    Mutation:{
      createPlan:async (args)=>{
        return await prisma.plan.create({
          data:{...args.data,  }
        })
      },
      updatePlan:async (args)=>{
        return await prisma.plan.update({
          where:{
            id:args.where.id
          },
          data:{...args.data, }
        })
      },
      deletePlan:async (args)=>{
        return await prisma.plan.delete({
          where:{
            id:args.where.id
          }
        })
      },
    }
    };

    export { PlanResolvers };

    