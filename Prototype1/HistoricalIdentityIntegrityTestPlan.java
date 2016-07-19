package com;

public class HistoricalIdentityIntegrityTestPlan extends TestPlan 
{
	/**
	 * <p>This test plan validates the end to end process of creating an registering a new user account such that user
	 * is displayed with historical identity integrity endorsements (i.e., is a real human being with a single
	 * identity, and also uses a common user name across multiple web accounts).
	 * 
	 * <p>Validation procedures:
	 * <ol>
	 *   <li>User John Smith wants to create an account on Facebook and confirms that user name JohnS_2877 is available.
	 *   <li>John Smith sets up an authorization request with Dish Network (assumes that Dish Network is a valid endorsement company).
	 *   <li>John Smith goes to Facebook and creates an account with a user name of JohnS_2877 and informs Facebook that he wants to be
	 *       endorsed by Dish Network.
	 *   <li>John Smith submits the request for the new account with Facebook, Facebook sends an identity confirmation request to Dish Network.
	 *   <li>Dish Network returns an authorization request expressing that John Smith is in fact a real human being and is using a common 
	 *       user name.
	 *   <li>When John Smith is diplayed on Facebook, his user name appears with two historical identity integrity endorsements
	 *       (i.e., real human being, and single web pressence).
	 * </ol>
	 * 
     * <p>Related links:
     * <ul>
     *   <li><a href="http://mrdmadison.github.io/Test1/Prototype1/CollaborationChapter2.htm#R3-ManagingIdentity">High level requirements</a>
     *   <li><a href="http://mrdmadison.github.io/Test1/Prototype1/CollaborationChapter4.htm#14-Historical_identity_integrity">Detailed requirements</a>
     * 
     *   <p>Use cases:
     *   <ul>
     *      <li> {@link com.HistoricalIdentityIntegrityUseCases#displayOfIdentifyEndorsementCertificate() displayOfIdentifyEndorsementCertificate}
     *      <li> {@link com.HistoricalIdentityIntegrityUseCases#identityIntegrityEntityEndorsesAValidatedUser() identityIntegrityEntityEndorsesAValidatedUser} 
     *      <li> {@link com.HistoricalIdentityIntegrityUseCases#identityIntegrityEntityUndergoesIdentityEndorsementAudit() identityIntegrityEntityUndergoesIdentityEndorsementAudit}
     *      <li> {@link com.HistoricalIdentityIntegrityUseCases#endUsersWillBeDisplayedWithHistoricalIdentityEndorsements() endUsersWillBeDisplayedWithHistoricalIdentityEndorsements}
     *   </ul> 
     * </ul>
     *  
	 */
	public void NewAccountRegistrationAndEndorsementEndToEnd() 
	{	
		HistoricalIdentityIntegrityUseCases.get().identityIntegrityEntityUndergoesIdentityEndorsementAudit();
		HistoricalIdentityIntegrityUseCases.get().displayOfIdentifyEndorsementCertificate();
		HistoricalIdentityIntegrityUseCases.get().identityIntegrityEntityEndorsesAValidatedUser();
		HistoricalIdentityIntegrityUseCases.get().endUsersWillBeDisplayedWithHistoricalIdentityEndorsements();
	}
	
}
