declare interface User {
  id: string
  accessToken: string
  name: string

  /**
   * Needs to be fetched separately.
   */
  profile?: CollectorProfile
}

declare interface CollectorProfile {
  confirmed_buyer_at: string,
  loyalty_applicant_at: string,
  name: string,
}
