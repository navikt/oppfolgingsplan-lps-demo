export interface FollowUpPlanDTO {
    employeeIdentificationNumber: string;
    typicalWorkday: string;
    tasksThatCanStillBeDone: string;
    tasksThatCanNotBeDone: string;
    previousFacilitation: string;
    plannedFacilitation: string;
    otherFacilitationOptions: string | null;
    followUp: string;
    evaluationDate: string; // Date in ISO format
    sendPlanToNav: boolean;
    needsHelpFromNav: boolean | null;
    needsHelpFromNavDescription: string | null;
    sendPlanToGeneralPractitioner: boolean;
    messageToGeneralPractitioner: string | null;
    additionalInformation: string | null;
    contactPersonFullName: string;
    contactPersonPhoneNumber: string;
    contactPersonEmail: string;
    employeeHasContributedToPlan: boolean;
    employeeHasNotContributedToPlanDescription: string | null;
    lpsName: string;
}