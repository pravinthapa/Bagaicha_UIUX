import { useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "./useAxiosPrivate";
import { useAuthStore } from "@/store/useAuthStore";

export const useQueryData = (
  key,
  path,
  params = "",
  enabled = true,
  token = false
) => {
  const axiosPrivate = useAxiosPrivate();
  const { user } = useAuthStore();

  return useQuery({
    queryKey: [key, params],
    queryFn: () =>
      axiosPrivate({
        url: path,
        method: "get",
        params: params,
        ...(token && {
          headers: {
            Apikey: `Token ${user?.user?.service}`,
          },
        }),
      }).then((res) => res?.data && res?.data),
    enabled,
  });
};

// Updated to fetch support tickets

export const useProductData = () =>
  useQueryData(["product"], `product/product/`);

export const useProductDetails = (id) =>
  useQueryData(["product",id], `product/product/${id}`);


export const useFeatureProducts = () =>
  useQueryData(["feature"], `dashboard/feature/`);

