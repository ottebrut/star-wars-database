import React, { Dispatch, SetStateAction, useState } from "react";

import ErrorMessage from "src/components/error-message";

export interface WithErrorApiViewProps {
  setErrorApi: Dispatch<SetStateAction<boolean>>;
}

export default function withErrorApi<T>(
  View: React.FC<T & WithErrorApiViewProps>
) {
  return (props: T) => {
    const [errorApi, setErrorApi] = useState(false);

    if (errorApi) {
      return <ErrorMessage />;
    }
    return <View {...props} setErrorApi={setErrorApi} />;
  };
}

// return (
//   <>
//     {errorApi && <ErrorMessage />}
//     <div className={styles.content}>
//       <View {...props} setErrorApi={setErrorApi} />
//     </div>
//   </>
// );
