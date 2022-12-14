import {Request, Response} from "express";
import {PlanApplication} from "../application/plans.Application";
import {PlansDTOMapper} from "./plans.DTO.mapper";

export class PlanPresentation {
  constructor(private planApplication: PlanApplication) {}

  public async findPlans(req: Request, res: Response): Promise<void> {
    const plans = await this.planApplication.findPlans();
    res.status(200).send(plans);
  }

  public async createPlan(req: Request, res: Response): Promise<void> {
    const input = PlansDTOMapper.toPlanDTO(req);

    await this.planApplication.createPlan(input);

    res.status(201).send({message: "Plano criado com sucesso"});
  }

  public async editPlan(req: Request, res: Response): Promise<void> {
    const input = PlansDTOMapper.toEditPlanDTO(req);

    await this.planApplication.editPlan(input);

    res.status(201).send({message: "Plano alterado com sucesso"});
  }

  public async deletePlan(req: Request, res: Response): Promise<void> {
    const input = PlansDTOMapper.toPlanIdDTO(req);

    await this.planApplication.deletePlan(input);
    res.status(200).send({message: "Plano deletado com sucesso"});
  }
}
