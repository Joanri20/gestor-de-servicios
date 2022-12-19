
    import prisma from 'config/prisma';

    const PlanResolvers = {
    Plan: {
        servicios: async (parent:any, _:any) => {
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
        plan: async (_:any, args:any) => {
        return await prisma.plan.findUnique({
            where: {
            id: args.id,
            },
        });
        },
    },
    Mutation:{
      createPlan:async (_:any, args:any)=>{
        return await prisma.plan.create({
          data:{...args.data,  }
        })
      },
      updatePlan:async (_:any, args:any)=>{
        return await prisma.plan.update({
          where:{
            id:args.where.id
          },
          data:{...args.data, }
        })
      },
      deletePlan:async (_:any, args:any)=>{
        return await prisma.plan.delete({
          where:{
            id:args.where.id
          }
        })
      },
    }
    };

    export { PlanResolvers };

    