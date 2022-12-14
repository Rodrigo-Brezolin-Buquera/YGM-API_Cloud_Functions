import {
  InvalidEmail,
  InvalidName,
} from "../../../common/customError/invalidRequests";
import {CommonDomain} from "../../../common/domain/CommonDomain";

export class User extends CommonDomain {
  constructor(
    public readonly email: string,
    public readonly password: string,
    public readonly name?: string,
    public readonly id?: string
  ) {
    super();
  }

  public checkEmail() {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(this.email)) {
      throw new InvalidEmail();
    }
    return this;
  }

  public checkName() {
    if (!this.name) {
      throw new InvalidName();
    }

    if (!this.name.includes(" ")) {
      throw new InvalidName();
    }

    const nameRegex =
      /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
    if (!nameRegex.test(this.name)) {
      throw new InvalidName();
    }
    if (this.name.length < 5) {
      throw new InvalidName();
    }
    const numberAndSpaceRegex = /^[A-Za-z.-]+(\s*[A-Za-z.-]+)*$/u;
    if (!numberAndSpaceRegex.test(this.name)) {
      throw new InvalidName();
    }
    return this;
  }

  public static toUser(obj: any): User {
    return new User(obj.email, obj.password, obj.name, obj.id);
  }
}
