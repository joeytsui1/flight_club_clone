class Api::SessionsController < ApplicationController
    def show
        if current_user
            @user = current_user
            render "api/users/show"
        else
            render json: { user: nil }
        end
    end

    def create
        debugger
        email = params[:email]
        password = params[:password]
        @user = User.find_by_credentials(email, password)
            if @user
                login!(@user)
                render "api/users/show"
            else
                debugger
                render json: { errors: ["Invalid credentials"] }, status: 422
            end
    end

    def destroy
        logout!
        head :no_content # populate http response with no content => no body
    end
end
