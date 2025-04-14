const ContactInfoSkeleton = () => {
  return (
    <div className="p-4 animate-pulse">
      <div className="flex flex-col items-center pb-6 border-b">
        <div className="h-20 w-20 rounded-full bg-gray-300 mb-3"></div>
        <div className="h-4 w-1/3 bg-gray-300 mb-2"></div>
        <div className="h-3 w-1/4 bg-gray-300 mb-1"></div>
        <div className="flex items-center mt-1">
          <div className="h-2 w-2 rounded-full bg-gray-300 mr-1"></div>
          <div className="h-3 w-1/5 bg-gray-300"></div>
        </div>
      </div>

      <div className="py-4 space-y-4">
        <div>
          <div className="h-4 w-1/4 bg-gray-300 mb-2"></div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <div className="h-3 w-1/4 bg-gray-300"></div>
              <div className="h-3 w-1/3 bg-gray-300"></div>
            </div>
            <div className="flex justify-between">
              <div className="h-3 w-1/4 bg-gray-300"></div>
              <div className="h-3 w-1/3 bg-gray-300"></div>
            </div>
            <div className="flex justify-between">
              <div className="h-3 w-1/4 bg-gray-300"></div>
              <div className="h-3 w-1/3 bg-gray-300"></div>
            </div>
          </div>
        </div>

        <div>
          <div className="h-4 w-1/4 bg-gray-300 mb-2"></div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <div className="h-3 w-1/4 bg-gray-300"></div>
              <div className="h-3 w-1/3 bg-gray-300"></div>
            </div>
            <div className="flex justify-between">
              <div className="h-3 w-1/4 bg-gray-300"></div>
              <div className="h-3 w-1/3 bg-gray-300"></div>
            </div>
            <div className="flex justify-between">
              <div className="h-3 w-1/4 bg-gray-300"></div>
              <div className="h-3 w-1/3 bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t">
        <div className="h-8 bg-gray-300 w-full"></div>
      </div>
    </div>
  );
};

export default ContactInfoSkeleton;
