import {Card, CardContent} from '@/components/ui/card';
import {ReactNode} from 'react';

export default function LoginCard({children}: {children: ReactNode}) {
  return (
    <Card className="flex h-[144] w-[288]">
      <CardContent className="flex flex-1 items-center justify-center p-0">
        {children}
      </CardContent>
    </Card>
  );
}
