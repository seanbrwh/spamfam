import jwt from "jsonwebtoken";

// Issuer
// Subject
// Audience
// Need to figure out the algo type the type shows strings
// need a public and private key

interface SigningOptions {
  issuer?: string;
  subject?: string;
  audience?: string;
  expiresIn?: string;
  algorithm?: Algorithm;
}

interface verifyOptions {
  issuer?: string;
  subject?: string;
  audience?: string;
  expiresIn?: string;
  algorithm?: Algorithm;
}

const signToken = (payload: any, $Options: SigningOptions) => {
  return jwt.sign(
    payload,
    { key: "123", passphrase: "top secret" },
    {
      issuer: $Options.issuer,
      subject: $Options.subject,
      audience: $Options.audience,
      expiresIn: "2h",
      algorithm: "RS256",
    }
  );
};

const verifyToken = (token: any, $Option: verifyOptions) => {
  try {
    return jwt.verify(token, "123", {
      issuer: $Option.issuer,
      subject: $Option.subject,
      audience: $Option.audience,
      algorithms: ["RS256"],
    });
  } catch (error) {
    console.error(error);
    return;
  }
};

const decodeToken = (token: any) => {
  return jwt.decode(token, { complete: true });
};

export default { signToken, verifyToken, decodeToken };
