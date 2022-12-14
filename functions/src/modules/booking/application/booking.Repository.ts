import {Checkin} from "../domain/booking.Entity";


export interface BookingRepository {
    findCheckinById(id: string): Promise<Checkin | undefined >
    findById(id: string, entity: string): Promise<Checkin[] >
    createCheckin(checkin: Checkin): Promise<void>
    validateCheckin(id: string, verified: boolean): Promise<void>
    deleteCheckin(id: string): Promise<void>
    deleteAllCheckinByContract(id: string): Promise<void>
}
