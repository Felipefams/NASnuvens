import { NextFunction, Request, Response } from "express";

export const sameNetworkOnlyRequests = (req: Request, res: Response, next: NextFunction) => {
    const allowedNetwork = '192.168.1.0/24'; // Adjust this to your network range
    const requestIp = req.ip || req.connection.remoteAddress;

    // Simple IP check (for IPv4)
    const ipParts = requestIp.split('.');
    const allowedParts = allowedNetwork.split('.')[0];

    if (ipParts[0] === allowedParts) {
        next(); // Allow the request
    } else {
        res.status(403).send('Access denied');
    }
}