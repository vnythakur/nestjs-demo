import { IsNumberString } from "class-validator";

export class CountParam {
    @IsNumberString()
    count: number;
}
