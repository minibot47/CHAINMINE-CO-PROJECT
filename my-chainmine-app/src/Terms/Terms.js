import React from 'react'
import './Terms.css'
import {Link} from 'react-router-dom'

const Terms = () => {
  return (
    <div className='Terms'>
        <div className='terms-top-image'>
            <h1>Terms of Service</h1>
        </div>
        <div className='terms-words'>
            <p>
                The following terms and conditions govern all use of the chainmine.prowebsite and all content, services, and products available 
                through the website, including, but not limited to, the client area (collectively referred to as the Site). <br/>
            </p>
            <p>
                The Site is owned and operated by ChainMine Ltd. (collectively referred to as the Operator). The Site is offered subject to your 
                acceptance without modification of all of the terms and conditions contained herein and all other operating rules, policies including,
                without limitation, the Operator's privacy policy and procedures that may be published from time to time on this Site by the Operator 
                (collectively, the "Agreement"). The Site is offered subject to your acceptance without modification of all of the terms and conditions 
                contained herein and all other operating rules, policies including, without limitation, the Operator's privacy policy and procedures 
                that may be published from time to time on this Site by the Operator (collectively, the "Agreement").<br/>
            </p>
            <p>
                Please read this Agreement carefully before accessing or using the Site. By accessing or using any part of the website, 
                you agree to become bound by the terms and conditions of this agreement. If you do not agree to all the terms and conditions 
                of this agreement, then you may not access the Site or use any services. The Site is available only to individuals who are at
                least 13 years old.
            </p>
            <br/>
            <h2>Client area account</h2>
            <br/>
            <p>
            You are responsible for maintaining the security of your client area account, and you are fully responsible for all activities 
            that occur under the account and any other actions taken in connection with the account. You must immediately notify the Operator 
            of any unauthorized uses of your account or any other breaches of security. The Operator will not be liable for any acts or omissions
             by You, including any damages of any kind incurred as a result of such acts or omissions.
            </p>
            <br/>
            <h2>Contribution to the website</h2>
            <br/>
            <p>If you leave comments anywhere on the Site, post material to the Site, post links on the Site, or otherwise make (or allow any third 
                party to make) material available by means of the Site (any such material, "Content"), You are entirely responsible for the content of
                , and any harm resulting from, that Content. That is the case regardless of whether the Content in question constitutes text, graphics
                , audio, or computer software. By making Content available, you represent and warrant that:
                Downloading, copying and use of the Content will not infringe the proprietary rights, including but not limited to the copyright, 
                patent, trademark or trade secret rights, of any third party
                You have fully complied with any third-party licenses relating to the Content, and have done all things necessary to successfully 
                pass through to end users any required terms
                The Content does not contain or install any viruses, worms, malware, trojan horses or other harmful or destructive content
                The Content is not spam, is not machine or randomly-generated, and does not contain unethical or unwanted commercial content designed 
                to drive traffic to third-party sites or boost the search engine rankings of third-party sites, or to further unlawful acts (such as 
                phishing) or mislead recipients as to the source of the material (such as spoofing)
                The Content is not pornographic, libelous or defamatory, does not contain threats or incite violence towards individuals or entities, 
                and does not violate the privacy or publicity rights of any third party
                By submitting Content to the Operator for inclusion on our Site, you grant the Operator a world-wide, royalty-free, and non-exclusive 
                license to reproduce, modify, adapt and publish the Content for the purpose of displaying, distributing, promoting, marketing or any other 
                lawful use.
                Without limiting any of those representations or warranties, the Operator has the right (though not the obligation) to, in the 
                Operator's sole discretion (i) refuse or remove any content that, in the Operator's reasonable opinion, violates any policy or 
                is in any way harmful or objectionable, or (ii) terminate or deny access to and use of the Site to any individual or entity for any 
                reason, in the Operator's sole discretion. The Operator will have no obligation to provide a refund of any amounts previously paid 
                under these circumstances.
            </p>
            <br/>
            <h2>What information do we collect?</h2>
            <br/>
            <p>
                We may collect personally identifiable information from you in a variety of ways, including through online forms for ordering products 
                and services, and other instances where you are invited to volunteer such information, including, but not limited to, when you register
                on our site, place an order or subscribe to our newsletter. When ordering or registering on our site, as appropriate, you may be asked 
                to enter your: name, e-mail address, mailing address, phone number or credit card information.
            </p>
            <br/>
            <h2>What do we use your information for?</h2>
            <br/>
            <p>
                Any of the information we collect from you may be used to personalize your experience, improve our website, improve customer service, 
                process transactions, send periodic emails. The email address you provide for order processing will only be used to send you information 
                and updates pertaining to your order. If you decide to opt-in to our mailing list, you will receive emails that may include company news, 
                updates, related product or service information, etc. If at any time you would like to unsubscribe from receiving future emails, we include
                detailed unsubscribe instructions at the bottom of each email.
            </p>
            <br/>
            <h2>How do we protect your information?</h2>
            <br/>
            <p>
                We implement a variety of security measures to maintain the safety of your personal information when you place an order or access your 
                personal information.
                We offer the use of a secure server. All supplied sensitive/credit information is transmitted via Secure Socket Layer (SSL) technology 
                and then encrypted into our payment gateway providers database only to be accessible by those authorized with special access rights to 
                such systems, and are required to keep the information confidential. After a transaction, your private information (credit cards, 
                social security numbers, financials, etc.) will not be stored on our servers.
            </p>
            <br/>
            <h2>Payments and refunds</h2>
            <br/>
            <p>
                The Site offers products and services for sale. The Site does not handle payments for these products directly but rather refers these 
                payments to a secure third-party payment processor which handles all aspects of the payment process. Any payment issues or disputes should
                be resolved directly with the payment processor. Once we have been notified by the payment processor that a payment has been made, and 
                that the payment has successfully passed a fraud review, access will be granted to the product or service being purchased as soon as 
                possible, however, we make no guarantees of timeliness or immediacy. Free accounts are provided with limited access to the Site that 
                allows the user to test all available services prior to making a payment and determine if the offered services meet users needs.
            </p>
            <br/>
            <h2>Responsibility of website visitors</h2>
            <br/>
            <p>
                By operating the Site, the Operator does not represent or imply that it endorses any or all of the contributed content, or that it 
                believes such material to be accurate, useful or non-harmful. You are responsible for taking precautions as necessary to protect yourself 
                and your computer systems from viruses, worms, trojan horses, and other harmful or destructive content. The Site may contain content that 
                is offensive, indecent, or otherwise objectionable, as well as content containing technical inaccuracies, typographical mistakes, and other
                errors. The Operator disclaims any responsibility for any harm resulting from the use by visitors of the Site.
            </p>
            <br/>
            <h2>Do we disclose any information to outside parties?</h2>
            <br/>
            <p>
                We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information, except to provide products or
                services you've requested. This does not include trusted third parties who assist us in operating our website, conducting our business, 
                or servicing you, so long as those parties agree to keep this information confidential. We may also release your information when we 
                believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others rights, property, or safety. 
                However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.
            </p>
            <br/>
            <h2>Copyright infringement and DMCA policy</h2>
            <br/>
            <p>
                As the Operator asks others to respect its intellectual property rights, it respects the intellectual property rights of others. If you 
                believe that material located on or linked to by the Site violates your copyright, you are encouraged to notify the Operator in accordance 
                with common DMCA policies. The Operator will respond to all such notices, including as required or appropriate by removing the infringing 
                material or disabling all links to the infringing material. In the case of a visitor who may infringe or repeatedly infringes the 
                copyrights or other intellectual property rights of the Operator or others, the Operator may, in its discretion, terminate or deny access to 
                and use of the Site. In the case of such termination, the Operator will have no obligation to provide a refund of any amounts previously paid 
                to the Operator. You further agree not to change or delete any proprietary notices from materials downloaded from the site. You must retain our 
                copyright notice in the policy you create unless you have purchased a premium policy in which case you may remove our copyright notice from your
                generated policy.
            </p>
            <br/>
            <h2>Do we use cookies?</h2>
            <br/>
            <p>
                Yes, we use cookies (which are small pieces of information that your browser stores on your computer's hard drive) to help us remember 
                and process the items in your shopping cart, understand and save your preferences for future visits and compile aggregate data about site 
                traffic and site interaction so that we can offer better site experiences and tools in the future. We may contract with third-party service
                providers to assist us in better understanding our site visitors. These service providers are not permitted to use the information 
                collected on our behalf except to help us conduct and improve our business.
            </p>
            <br/>
            <h2>Third-party links</h2>
            <br/>
            <p>
                Our site may contain links to third-party sites. These third-party sites have separate and independent terms of service and privacy 
                policies. We, therefore, have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek 
                to protect the integrity of our site and welcome any feedback about these sites.
            </p>
            <br/>
            <h2>Intellectual property</h2>
            <br/>
            <p>
                This Agreement does not transfer from the Operator to you any of the Operator's or third party intellectual property, and all right, title 
                and interest in and to such property will remain (as between the parties) solely with the Operator. The Operator logo and all other 
                trademarks, service marks, graphics and logos used in connection with the Operator, or the Site are trademarks or registered trademarks 
                of the Operator or the Operator's licensors. Other trademarks, service marks, graphics and logos used in connection with the Site may be 
                the trademarks of other third parties. Your use of the Site grants you no right or license to reproduce or otherwise use any the Operator 
                r third-party trademarks.
            </p>
            <br/>
            <h2>Changes</h2>
            <br/>
            <p>
                The Operator reserves the right, at its sole discretion, to modify or replace any part of this Agreement. It is your responsibility to 
                check this Agreement periodically for changes. Your continued use of or access to the Site following the posting of any changes to this 
                Agreement constitutes acceptance of those changes. The Operator may also, in the future, offer new services and/or features through the 
                Site (including, the release of new tools and resources). Such new features and/or services shall be subject to the terms and conditions 
                of this Agreement.
            </p>
            <br/>
            <h2>Termination</h2>
            <br/>
            <p>
                The Operator may terminate your access to all or any part of the Site at any time, with or without cause, with or without notice, 
                effective immediately. If you wish to terminate this Agreement you may simply discontinue using the Site. Notwithstanding the foregoing, 
                if you have a client account, such account can only be terminated by the Operator if you materially breach this Agreement and fail to cure
                such breach within 14 (fourteen) days from the Operator's notice to you thereof; provided that, the Operator can terminate the Site 
                immediately as part of a general shut down of our service. All provisions of this Agreement which by their nature should survive
                termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and 
                limitations of liability.
            </p>
            <br/>
            <h2>Disclaimer of warranties</h2>
            <br/>
            <p>
                The Site is provided "as is". The Operator and its suppliers and licensors hereby disclaim all warranties of any kind, express or implied, 
                including, without limitation, the warranties of merchantability, fitness for a particular purpose and non-infringement. Neither the 
                Operator nor its suppliers and licensors make any warranty that the Site will be error-free or that access thereto will be continuous or
                uninterrupted. You understand that it is your responsibility to ensure that the policy you create is complete, accurate, and meets yours 
                and your company's specific needs. We are not liable or responsible for any policies created using our services, and we give no 
                representations or warranties, express or implied, that the policies created using our service are complete, accurate or free from errors 
                or omissions.
            </p>
            <br/>
            <h2>Limitation of liability</h2>
            <br/>
            <p>
                The Operator is not a lawyer or a law firm and does not engage in the practice of law or provide legal advice or legal representation. 
                All information, products, and services provided on the site are for informational and self-help purposes only and are not intended to 
                be a substitute for professional legal advice.
                In no event will the Operator, or its suppliers or licensors, be liable with respect to any subject matter of this agreement 
                under any contract, negligence, strict liability or other legal or equitable theory for: (i) any special, incidental or consequential 
                damages; (ii) the cost of procurement or substitute products or services; (iii) for interruption of use or loss or corruption of data; 
                or (iv) for any amounts that exceed the fees paid by you to the Operator under this agreement. The Operator shall have no liability for 
                any failure or delay due to matters beyond their reasonable control. The foregoing shall not apply to the extent prohibited by applicable 
                law. The Operator shall not be liable for any special or consequential damages that result from the use of, or the inability to use, the
                services and products offered on this site, or the performance of the services and products.
            </p>
            <br/>
            <h2>General representation and warranty</h2>
            <br/>
            <p>
                You represent and warrant that (i) your use of the Site will be in strict accordance with this Agreement and with all applicable laws 
                and regulations (including without limitation any local laws or regulations in your country, state, city, or other governmental area, 
                regarding online conduct and acceptable content, and including all applicable laws regarding the transmission of technical data exported 
                from the United States or the country in which you reside) and (ii) your use of the Site will not infringe or misappropriate the 
                intellectual property rights of any third party.
            </p>
            <br/>
            <h2>Indemnification</h2>
            <br/>
            <p>
                You agree to indemnify and hold harmless the Operator, its contractors, and its licensors, and their respective directors, officers, 
                employees and agents from and against any and all claims and expenses, including attorneys' fees, arising out of your use of the Site, 
                including but not limited to your violation of this Agreement.
            </p>
            <br/>
            <h2>Miscellaneous</h2>
            <br/>
            <p>
                This Agreement constitutes the entire agreement between the Operator and you concerning the subject matter hereof, and they may only be 
                modified by a written amendment signed by an authorized executive of the Operator, or by the posting by the Operator of a revised version. 
                Except to the extent applicable law, if any, provides otherwise, this Agreement, any access to or use of the Site will be governed by the 
                laws of the state of Ontario, Canada, excluding its conflict of law provisions, and the proper venue for any disputes arising out of or 
                relating to any of the same will be the state and federal courts located in Toronto, Ontario. If any part of this Agreement is held invalid
                or unenforceable, that part will be construed to reflect the parties' original intent, and the remaining portions will remain in full 
                force and effect. A waiver by either party of any term or condition of this Agreement or any breach thereof, in any one instance, will 
                not waive such term or condition or any subsequent breach thereof. You may assign your rights under this Agreement to any party that 
                consents to, and agrees to be bound by, its terms and conditions; the Operator may assign its rights under this Agreement without 
                condition. This Agreement will be binding upon and will inure to the benefit of the parties, their successors and permitted assigns.
            </p>
            <br/>
            <h2>Changes to our terms and privacy policiesChanges to our terms and privacy policies</h2>
            <br/>
            <p>
                From time to time we may make adjustments to this policy. Changes will be made at our sole discretion. Site's users are encouraged to 
                check this policy for such changes. Your continued use of this site following changes to this policy constitutes your acceptance of the 
                changes.
            </p>
            <br/>
            <h2>Contacting us</h2>
            <br/>
            <p>
            Any questions about these terms of service and privacy policy should be addressed to us via the details on our <span>contact page</span>.
            </p>
        </div>
    </div>
  )
}

export default Terms