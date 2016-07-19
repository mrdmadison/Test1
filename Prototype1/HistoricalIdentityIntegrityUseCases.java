package com;

public class HistoricalIdentityIntegrityUseCases extends UseCase
{
	public static HistoricalIdentityIntegrityUseCases get() { return new HistoricalIdentityIntegrityUseCases(); }

	/**
	 * Companies and organizations which want to participate in historical identity integrity must be certified that they
	 * are adhere to all the guidelines and best practices surrounding validating end users.  The endorsing entity will
	 * apply for certification, and once they successfully complete the audit process, they will be awarded an
	 * identity integrity certificate.   
	 * 
	 */
	public void identityIntegrityEntityUndergoesIdentityEndorsementAudit() {}
	
	
    /**
     * Companies and organizations that endorse end users as having valid historical identity integrity must display
     * proof that they adhere to all guidelines and best practices.  Upon request, such companies must present their
     * endorsement audit certificate.
     */
    public void displayOfIdentifyEndorsementCertificate() {}
    

    /**
     * End users which have been successfully registered and validated will be granted historical identity integrity
     * endorsements.
     */
    public void identityIntegrityEntityEndorsesAValidatedUser() {}
    
    
    /**
     * End users which have been successfully registered and validated will be displayed (on the web) with their
     * historical identity endorsements.  For example, a validated user on Facebook might have the following endorsements
     * <ol>
     *    <li>Single human being (non virtual account)
     *    <li>Identified with a common user name.
     */
    public void endUsersWillBeDisplayedWithHistoricalIdentityEndorsements() {}    
}
