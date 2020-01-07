import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useAxios } from "../src";

jest.mock("axios");

describe("axios", () => {
  beforeEach(() => {
    axios.create = jest.fn(() => ({
      request: jest.fn()
    })) as any;
  });

  it("should create axios client", () => {
    const options: AxiosRequestConfig = {
      baseURL: "./api"
    };
    useAxios(options);

    expect(axios.create).toBeCalledWith(options);
  });

  it("should call axios", async () => {
    const { exec, client } = useAxios();
    const request: AxiosRequestConfig = {
      method: "GET",
      url: "./api/1"
    };

    await exec(request);

    expect(client.value.request).toBeCalledWith(request);
  });

  it("should set response", async () => {
    const { exec, client, result, data, status, statusText } = useAxios();
    const request: AxiosRequestConfig = {
      method: "GET",
      url: "./api/1"
    };

    const response: AxiosResponse = {
      data: {
        test: 1
      },
      status: 200,
      statusText: "OK",
      headers: {},
      config: {}
    };

    (client.value.request as jest.Mock).mockImplementationOnce(() => response);

    const r = await exec(request);

    expect(r).toBe(response);
    expect(result.value).toStrictEqual(response);
    expect(data.value).toStrictEqual(response.data); 
    expect(status.value).toStrictEqual(response.status);
    expect(statusText.value).toStrictEqual(response.statusText);
  });

  it("should set data, status and statusText on error request", async () => {
    const {
      exec,
      client,
      error,
      data,
      status,
      statusText
    } = useAxios();
    const request: AxiosRequestConfig = {
      method: "GET",
      url: "./api/1"
    };

    const response: AxiosResponse = {
      data: {
        test: 1
      },
      status: 200,
      statusText: "OK",
      headers: {},
      config: {}
    };

    (client.value.request as jest.Mock).mockImplementationOnce(() => {
      throw {
        response
      };
    });

    await exec(request);

    expect(error.value).toMatchObject({ response });
    expect(data.value).toStrictEqual(response.data);
    expect(status.value).toBe(response.status);
    expect(statusText.value).toBe(response.statusText);
  });

  it("should set set data, status and statusText to null, if Error has been thrown", async () => {
    const {
      exec,
      client,
      data,
      status,
      statusText
    } = useAxios();
    const request: AxiosRequestConfig = {
      method: "GET",
      url: "./api/1"
    };

    (client.value.request as jest.Mock).mockImplementationOnce(() => {
      throw new Error("invalid");
    });

    await exec(request);

    expect(data.value).toBeNull();
    expect(status.value).toBeNull();
    expect(statusText.value).toBeNull();
  });

  it("should get null on status if exec not been called", () => {
    const { result, data, status, statusText } = useAxios();
    expect(result.value).toBeNull();
    expect(data.value).toBeNull();
    expect(status.value).toBeNull();
    expect(statusText.value).toBeNull();
  });
});
