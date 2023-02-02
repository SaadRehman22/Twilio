const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_SERVICE_SID } =
  process.env;

const client = require("twilio")(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

//send otp needs two parameters; countrycode and phonenumber
const sendOTP = async (req, res, next) => {
  const { countryCode, phoneNumber } = req.body;
  try {
    const otpResponse = await client.verify
      .services(TWILIO_SERVICE_SID)
      .verifications.create({
        to: `+${countryCode} ${phoneNumber}`,
        channel: "sms",
      });
    res
      .status(200)
      .send(`OTP send successfully!: ${JSON.stringify(otpResponse)}`);
  } catch (error) {
    res.status(400);
  }
};
//verify otp accepts countryCode,phoneNumber and OTP 
//it verifies the OTP using verificationChecks services of Twilio

const verifyOTP = async (req, res, next) => {
    const { countryCode, phoneNumber,otp } = req.body;
    try {
      const verifiedResponse = await client.verify
        .services(TWILIO_SERVICE_SID)
        .verifications.create({
          to: `+${countryCode} ${phoneNumber}`,
          code: otp,
        });
      res
        .status(200)
        .send(`OTP send successfully!: ${JSON.stringify(verifiedResponse)}`);
    } catch (error) {
      res.status(400);
    }
  };
  
module.exports={
    sendOTP,
    verifyOTP
}