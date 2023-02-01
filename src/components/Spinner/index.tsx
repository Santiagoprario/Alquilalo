import React, { FunctionComponent } from 'react';

interface SpinnerProps {
	loading: boolean;
	size?: 'small' | 'medium' | 'large';
}

const Spinner: FunctionComponent<SpinnerProps> = ({loading = false, size = 'small' }: SpinnerProps) => {
  if(!loading) return null;
  
  const sizes = {
    small : 'h-20 w-20',
    medium: 'h-48 w-48',
    large: 'h-64 w-64'
  }
  
  return (
    <div className="relative">
    <div className="absolute inset-0 h-screen flex justify-center items-center">
        <div>
            Element on the center of the screen
        </div>
    </div>
</div>
  )
};

export default Spinner;
