export interface Contract {
    id: string,
    name: string,
    closedContracts: ClosedContracts[],
    currentContract: CurrentContract

}

export interface YogaClass {
    name: string,
    date: string,
    day: string,
    teacher: string,
    time: string,
    capacity: number,
    groupId: string,
    id?: string

}

export interface ClosedContracts {
    plan: PLAN,
    ended: string
}

export enum ENTITY {
    CONTRACT = "contract",
    YOGACLASS = "yogaClass"
}

export interface CurrentContract {
    active: boolean,
    plan: PLAN,
    started: string,
    ends: string,
    availableClasses: number
}

export enum PLAN {
    MONTHLYX1 = "1x-Mensal",
    MONTHLYX2 = "2x-Mensal",
    MONTHLYX3 = "3x-Mensal",
    QUARTERLYX1 = "1x-Trimestral",
    QUARTERLYX2 = "2x-Trimestral",
    QUARTERLYX3 = "3x-Trimestral",
    SEMIANNUALX1 = "1x-Semestral",
    SEMIANNUALX2 = "2x-Semestral",
    SEMIANNUALX3 = "3x-Semestral",
    SINGLE = "----Avulsa",
    APP = "----Gympass"
}

