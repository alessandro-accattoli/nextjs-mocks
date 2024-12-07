/**
 * @testEnvironment node
 */

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

describe('ExampleTest', () => {
    it('should call cookies.set', async () => {
        const cookieStore = await cookies();

        // run server action
        // es. await myServerAction();
        
        expect(cookieStore.set).toHaveBeenCalled();
        expect(cookieStore.set).toHaveBeenCalledWith('my-cookie', 'cookie-value', {
            httpOnly: true,
            sameSite: true
        });
    });
    it('should call redirect with sign in path', () => {
        // run server action
        // es. await myServerAction();

        expect(redirect).toHaveBeenCalledWith('/signin');
    });
});
