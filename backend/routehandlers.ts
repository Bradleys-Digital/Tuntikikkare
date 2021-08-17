import { Request, Response } from 'express';

const getCompanies = async (c: any, req: Request, res: Response) => res.status(200).json({data: "This is companies test response"});
const addCompany = async (c: any, req: Request, res: Response) => res.status(200).json({text: "This is add companies test response"});
const validationFail = async (c: any, req: Request, res: Response) => res.status(400).json({ err: c.validation.errors });
const notFound =  async (c: any, req: Request, res: Response) => res.status(404).json({ err: 'not found' });

const routehandlers = {
  getCompanies, 
  addCompany,
  validationFail, 
  notFound
};

export default routehandlers;